import 'firebase/compat/app-check';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const pr = require('profane-words');

const NUM_SCORES_DISPLAYED = 10;
const ba = /(fuc)|(ass)|(nig)|(shit)|(retard)/gi;

// TODO! Support beatmapCharacteristic in here

/**
 * High score with Firebase cloud store.
 * Index: challengeId ASC difficulty ASC score DESC time ASC
 */
AFRAME.registerComponent('leaderboard', {
  schema: {
    apiKey: {type: 'string'},
    authDomain: {type: 'string'},
    databaseURL: {type: 'string'},
    projectId: {type: 'string'},
    storageBucket: {type: 'string'},
    messagingSenderId: {type: 'string'},
    appId: {type: 'string'},
    captchaKey: {type: 'string'},

    challengeId: {default: ''},
    difficulty: {default: ''},
    beatmapCharacteristic: { default: '' },
    inVR: {default: false},
    gameMode: {type: 'string'},
    menuSelectedChallengeId: {default: ''},
    isVictory: {default: false}
  },

  /**
   * `init` function sets up initial state and variables.
   * Called once when the component is initialized.
   */
  init: function () {
    // Set initial state for leaderboard variables
    this.qualifyingIndex = undefined;
    this.scores = [];
    this.maxStreaks = [];
    this.eventDetail = {scores: this.scores, maxStreaks: this.maxStreaks};
    this.addEventDetail = {scoreData: undefined, maxStreakData: undefined, index: undefined};

    // Retrieve username from local storage or set default
    this.username = localStorage.getItem('moonriderusername') || 'Super Zealot';

    // Event listeners for updating username and submitting score
    this.el.addEventListener('leaderboardusername', evt => {
      this.username = evt.detail.value;
      localStorage.setItem('moonriderusername', this.username);
    });
    this.el.addEventListener('leaderboardsubmit', this.addScore.bind(this));
    this.el.addEventListener('leaderboardmaxstreakssubmit', this.addMaxStreak.bind(this));
    this.el.addEventListener('leaderboardswitchtostreaks', this.switchToMaxStreaks.bind(this));
    this.el.addEventListener('leaderboardswitchtoscore', this.switchToScores.bind(this));
  },

  /**
   * Called both when the component is initialized and whenever any of the component’s properties is updated
   * Handles connection to Firebase for the leaderboard
   * Fetches latest scores for the selected challenge/difficulty and checks if the score qualifies for the leaderboard
   *
   * @param {Object} oldData - The previous data of the component.
   */
  update: function (oldData) {
    // Initialize Cloud Firestore through Firebase.
    const firebaseConfig = {
      apiKey: this.data.apiKey,
      authDomain: this.data.authDomain,
      databaseURL: this.data.databaseURL,
      projectId: this.data.projectId,
      storageBucket: this.data.storageBucket,
      messagingSenderId: this.data.messagingSenderId,
      appId: this.data.appId
    };
    if (!firebase.apps.length && this.data.apiKey) {
      const firebaseApp = firebase.initializeApp(firebaseConfig);

      if (firebaseApp) {
        // Initialize Firebase App Check
        const appCheck = firebase.appCheck()
        appCheck.activate(this.data.captchaKey, true)
      }


      this.firestore = firebase.firestore();
      this.firestore.settings({});
      this.scoreDB = this.firestore.collection('scores');
      this.maxStreakDB = this.firestore.collection('maxStreaks');

    }

    // Check if the game state has changed from not being a victory to being a victory
    if (!oldData.isVictory && this.data.isVictory) {
      this.checkLeaderboardQualify();
      this.checkMaxStreaksQualify();
    }

    // If the difficulty has changed, fetch the scores for the selected challenge
    if (this.data.difficulty && oldData.difficulty !== this.data.difficulty) {
      this.fetchScores(this.data.menuSelectedChallengeId);
      this.fetchMaxStreaks(this.data.menuSelectedChallengeId);
      return;
    }

    // If the selected challenge has changed, fetch the scores for the new challenge
    if (this.data.menuSelectedChallengeId &&
        oldData.menuSelectedChallengeId !== this.data.menuSelectedChallengeId) {
      this.fetchScores(this.data.menuSelectedChallengeId);
      this.fetchMaxStreaks(this.data.menuSelectedChallengeId);
      return;
    }

    // If the challenge ID has changed, fetch the scores for the new challenge
    if (this.data.challengeId && oldData.challengeId !== this.data.challengeId) {
      this.fetchScores(this.data.challengeId);
      this.fetchMaxStreaks(this.data.challengeId);
      return;
    }
  },

  addScore: function () {
    this.add('score', score => score.score, this.scoreDB, 'scoreData', 'leaderboardscoreadded')
  },

  addMaxStreak: function () {
    this.add('maxStreak', score => score.maxCombo, this.maxStreakDB, 'maxStreakData', 'leaderboardmaxstreakadded')
  },

  /**
 * This function adds a new entry to the specified database.
 *
 * @param {string} attributeName - The name of the attribute to be added to the database.
 * @param {function} attributeValueExtractor - A function to extract the value of the attribute from the score object.
 * @param {Object} db - The database to which the new entry is to be added.
 * @param {string} resultEventAttribute - The attribute of the event detail object to which the new entry data is to be assigned.
 * @param {string} eventToEmit - The name of the event to emit after the new entry is added.
 */
add: function (attributeName, attributeValueExtractor, db, resultEventAttribute, eventToEmit) {
  const state = this.el.sceneEl.systems.state.state;

  // If the game state is not a victory or the game is not in VR, return without adding a new entry.
  if (!state.isVictory || !state.inVR) { return; }

  // Construct the data for the new entry.
  const data = {
    accuracy: state.score.accuracy,
    challengeId: state.challenge.id,
    gameMode: this.data.gameMode,
    [attributeName]: attributeValueExtractor(state.score),
    username: this.username,
    difficulty: this.data.difficulty || state.challenge.difficulty,
    time: new Date()
  };

  // If the username is not profane, add the new entry to the database.
  if (!pr.includes(this.username.toLowerCase()) &&
      !this.username.match(ba)) {
    db.add(data);
  }

  // Assign the new entry data to the specified attribute of the event detail object.
  this.addEventDetail[resultEventAttribute] = data;

  // Emit the specified event with the event detail.
  this.el.emit(eventToEmit, this.addEventDetail, false);
},

  fetchScores: function (challengeId) {
    this.fetch(challengeId, this.scoreDB, 'score', this.scores, 'leaderboard');
  },

  fetchMaxStreaks: function (challengeId) {
    this.fetch(challengeId, this.maxStreakDB, 'maxStreak', this.maxStreaks, 'leaderboardMaxStreaks');
  },

  /**
 * This function fetches data from a specified database based on the provided parameters.
 *
 * @param {string} challengeId - The ID of the challenge for which data is to be fetched.
 * @param {Object} db - The database from which data is to be fetched.
 * @param {string} orderingAttributeName - The attribute based on which the data is to be ordered.
 * @param {Array} resultArray - The array in which the fetched data is to be stored.
 * @param {string} eventToEmit - The name of the event to emit after the data is fetched.
 */
fetch: function (challengeId, db, orderingAttributeName, resultArray, eventToEmit) {
  // If the game mode is 'ride', return without fetching data.
  if (this.data.gameMode === 'ride') { return; }

  const state = this.el.sceneEl.systems.state.state;
  // Construct the query to fetch data from the database.
  const query = db
      .where('challengeId', '==', challengeId)
      .where(
          'difficulty', '==',
          state.menuSelectedChallenge.id
              ? state.menuSelectedChallenge.difficulty
              : state.challenge.difficulty)
      .where('gameMode', '==', this.data.gameMode)
      .orderBy(orderingAttributeName, 'desc')
      .orderBy('time', 'asc')
      .limit(10);
  // Execute the query and handle the result.
  query.get().then(snapshot => {
    this.eventDetail.challengeId = challengeId;
    resultArray.length = 0;
    // If the snapshot is not empty, push the data into the attribute array.
    if (!snapshot.empty) {
      snapshot.forEach(score => resultArray.push(score.data()));
    }
    // Emit the specified event with the event detail.
    this.el.sceneEl.emit(eventToEmit, this.eventDetail, false);
  }).catch(e => {
    // Log any errors that occur during the execution of the query.
    console.error('[firestore]', e);
  });
},

  switchToMaxStreaks: function () {
    this.el.sceneEl.emit('leaderboardUpdateDisplayMode', 'MAX_STREAK');
  },

  switchToScores: function () {
    this.el.sceneEl.emit('leaderboardUpdateDisplayMode', 'SCORE');
  },

  /**
   * Is high score?
   */
  checkLeaderboardQualify: function () {
    this.checkQualify(
        this.scores,
        this.el.sceneEl.systems.state.state.score.score,
        score => score.score,
        'leaderboardqualify'
    );
  },

  checkMaxStreaksQualify: function () {
    this.checkQualify(
        this.maxStreaks,
        this.el.sceneEl.systems.state.state.score.maxCombo,
        score => score.maxStreak,
        'leaderboardmaxstreaksqualify'
    );
  },

  /**
   * This function checks if a new score qualifies to be on the leaderboard.
   *
   * @param {Array} scoreArray - The array of existing scores on the leaderboard.
   * @param {number} newScore - The new score to check.
   * @param {function} scoreExtractor - A function to extract the score value from the score object.
   * @param {string} eventToEmit - The name of the event to emit if the new score qualifies.
   */
  checkQualify: function (scoreArray, newScore, scoreExtractor, eventToEmit) {

    if (AFRAME.utils.getUrlParameter('dot')) { return; }

    // If the leaderboard has less than 10 scores, then the new score automatically qualifies.
    if (scoreArray.length < NUM_SCORES_DISPLAYED) {
      this.el.sceneEl.emit(eventToEmit, scoreArray.length, false);
      return;
    }

    // Check if the new score is higher than any of the existing scores on the leaderboard.
    for (let i = 0; i < scoreArray.length; i++) {
      if (newScore > scoreExtractor(scoreArray[i])) {
        // If the new score is higher, emit the specified event with the index of the overtaken score.
        this.el.sceneEl.emit(eventToEmit, i, false);
        return;
      }
    }
  },

});
