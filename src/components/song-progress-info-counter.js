AFRAME.registerComponent('song-progress-info-counter', {

  schema: {
    enabled: {default: false}
  },

  init: function () {
    this.tick = AFRAME.utils.throttleTick(this.tick.bind(this), 1000);

    this.element = this.el;
    this.el.sceneEl.addEventListener('cleargame', () => {
      this.element.setAttribute('text', 'value', '');
    });
  },

  update: function (oldData) {
    this.element.setAttribute('text', 'value', '');
  },

  updateInfo: function () {
    const source = this.el.sceneEl.components.song.source;
    if (!source || !source.buffer) { return; }

    const timeRemaining =
        source.buffer.duration - this.el.sceneEl.components.song.getCurrentTime();

    if (!timeRemaining) { return; }
    this.element.setAttribute('text', 'value', '-' + this.convertTime(timeRemaining));
  },

  tick: function () {
    if (!this.data.enabled) { return; }
    this.updateInfo();
  },

  convertTime: function (seconds) {
    var seconds = parseInt(seconds, 10)
    var hours = Math.floor(seconds / 3600)
    var minutes = Math.floor((seconds - (hours * 3600)) / 60)
    var seconds = seconds - (hours * 3600) - (minutes * 60)
    if (!!hours) {
      if (!!minutes) {
        return `${hours}h ${minutes}m ${seconds}s`
      } else {
        return `${hours}h ${seconds}s`
      }
    }
    if (!!minutes) {
      return `${minutes}m ${seconds}s`
    }
    return `${seconds}s`
  }
});
