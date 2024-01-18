
AFRAME.registerComponent('stat-distance-positioner', {
  schema: {
    statDistance: {default: 'CLOSE'}
  },

  update: function () {
    if (this.data.statDistance === 'VERY_FAR') {
      this.el.object3D.position.z = -8;
    } else if (this.data.statDistance === 'FAR') {
      this.el.object3D.position.z = -4;
    } else {
      this.el.object3D.position.z = 0;
    }
  }
});
