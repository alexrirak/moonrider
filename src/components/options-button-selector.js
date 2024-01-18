
AFRAME.registerComponent('options-button-selector', {
  schema: {
    selected: {default: false}
  },

  update: function () {
    if (this.data.selected) {
      this.el.setAttribute('mixin', 'optionsMenuButtonSelected noClickSoundUI noHoverSoundUI');
    } else {
        this.el.setAttribute('mixin', 'optionsMenuButton clickSoundUI hoverSoundUI');
    }
  }
});
