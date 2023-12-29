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
    this.eventDetail = {scores: this.scores};
    this.addEventDetail = {scoreData: undefined, index: undefined};

    // Retrieve username from local storage or set default
    this.username = localStorage.getItem('moonriderusername') || 'Super Zealot';

    // Event listeners for updating username and submitting score
    this.el.addEventListener('leaderboardusername', evt => {
      this.username = evt.detail.value;
      localStorage.setItem('moonriderusername', this.username);
    });
    this.el.addEventListener('leaderboardsubmit', this.addScore.bind(this));
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
    this.db = this.firestore.collection('scores');

  }

  // Check if the game state has changed from not being a victory to being a victory
  if (!oldData.isVictory && this.data.isVictory) {
    this.checkLeaderboardQualify();
  }

  // If the difficulty has changed, fetch the scores for the selected challenge
  if (this.data.difficulty && oldData.difficulty !== this.data.difficulty) {
    this.fetchScores(this.data.menuSelectedChallengeId);
    return;
  }

  // If the selected challenge has changed, fetch the scores for the new challenge
  if (this.data.menuSelectedChallengeId &&
    oldData.menuSelectedChallengeId !== this.data.menuSelectedChallengeId) {
    this.fetchScores(this.data.menuSelectedChallengeId);
    return;
  }

  // If the challenge ID has changed, fetch the scores for the new challenge
  if (this.data.challengeId && oldData.challengeId !== this.data.challengeId) {
    this.fetchScores(this.data.challengeId);
    return;
  }
},

  addScore: function () {
    const state = this.el.sceneEl.systems.state.state;

    if (!state.isVictory || !state.inVR) { return; }

    const scoreData = {
      accuracy: state.score.accuracy,
      challengeId: state.challenge.id,
      gameMode: this.data.gameMode,
      score: state.score.score,
      username: this.username,
      difficulty: this.data.difficulty || state.challenge.difficulty,
      time: new Date()
    };

    if (!pr.includes(this.username.toLowerCase()) &&
      !this.username.match(ba)) {
      this.db.add(scoreData);
    }

    this.addEventDetail.scoreData = scoreData;
    this.el.emit('leaderboardscoreadded', this.addEventDetail, false);
  },

  fetchScores: function (challengeId) {
    if (this.data.gameMode === 'ride') { return; }

    const state = this.el.sceneEl.systems.state.state;
    const query = this.db
      .where('challengeId', '==', challengeId)
      .where(
        'difficulty', '==',
        state.menuSelectedChallenge.id
          ? state.menuSelectedChallenge.difficulty
          : state.challenge.difficulty)
      .where('gameMode', '==', this.data.gameMode)
      .orderBy('score', 'desc')
      .orderBy('time', 'asc')
      .limit(10);
    query.get().then(snapshot => {
      this.eventDetail.challengeId = challengeId;
      this.scores.length = 0;
      if (!snapshot.empty) {
        snapshot.forEach(score => this.scores.push(score.data()));
      }
      this.el.sceneEl.emit('leaderboard', this.eventDetail, false);
    }).catch(e => {
      console.error('[firestore]', e);
    });
  },

  /**
   * Is high score?
   */
  checkLeaderboardQualify: function () {
    const state = this.el.sceneEl.systems.state.state;
    const score = state.score.score;

    if (AFRAME.utils.getUrlParameter('dot')) { return; }

    // If less than 10, then automatic high score.
    if (this.scores.length < NUM_SCORES_DISPLAYED) {
      this.qualifyingIndex = this.scores.length;
      this.el.sceneEl.emit('leaderboardqualify', this.scores.length, false);
      return;
    }

    // Check if overtook any existing high score.
    for (let i = 0; i < this.scores.length; i++) {
      if (score > this.scores[i].score) {
        this.qualifyingIndex = i;
        this.el.sceneEl.emit('leaderboardqualify', i, false);
        return;
      }
    }
  }
});
