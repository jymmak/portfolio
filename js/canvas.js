bgAnimation = {}

bgAnimation.init = function () {
  $(window).on('resize', this.canvasController.onResize);

  this.canvasController.init();
}

bgAnimation.helpers = {
  randomNumber: function (min, max) {
    return Math.floor(Math.random() * max) + 0
  }
}

bgAnimation.canvasController = {
  flatColorSets: [{
    color1: "#BF6973",
    color2: "#e74c3c"
  }, {
    color1: "#BF6973",
    color2: "#e74c3c"
  }, {
    color1: "#1bc0a0",
    color2: "#ecf0f1",
  }, {
    color1: "#9b59b6",
    color2: "#f39c12"
  }, {
    color1: "#c0392b",
    color2: "#F4CFD5"
  }
  ],
  isNewGradientEligible: true,
  init: function () {
    bgAnimation.canvasController.canvas = document.getElementById('canvas');
    bgAnimation.canvasController.ctx = canvas.getContext('2d');
    width = $(window).width();
    height = $(window).height();
    bgAnimation.canvasController.canvas.width = width;
    bgAnimation.canvasController.canvas.height = height;

    bgAnimation.canvasController.setGradient(true);
    bgAnimation.canvasController.updateLoop();
  },

  onResize: function () {
    width = $(window).width();
    height = $(window).height();
    bgAnimation.canvasController.canvas.width = width;
    bgAnimation.canvasController.canvas.height = height;

    bgAnimation.canvasController.setGradient(false);
  },

  setGradient: function (newColor) {
    bgAnimation.canvasController.currentGradient = this.ctx.createLinearGradient(0, 0, bgAnimation.canvasController.canvas.width, bgAnimation.canvasController.canvas.width);

    if (newColor) {
      bgAnimation.canvasController.gradientColor = bgAnimation.canvasController.flatColorSets[bgAnimation.helpers.randomNumber(0, bgAnimation.canvasController.flatColorSets.length - 1)];
    }

    bgAnimation.canvasController.currentGradient.addColorStop(0, bgAnimation.canvasController.gradientColor.color1);
    bgAnimation.canvasController.currentGradient.addColorStop(1, bgAnimation.canvasController.gradientColor.color2);

    bgAnimation.canvasController.ctx.fillStyle = bgAnimation.canvasController.currentGradient;
    bgAnimation.canvasController.ctx.fillRect(0, 0, bgAnimation.canvasController.canvas.width, bgAnimation.canvasController.canvas.height);
  },

  updateLoop: function () {
    requestAnimationFrame(bgAnimation.canvasController.updateLoop)
  }
}


bgAnimation.init();


