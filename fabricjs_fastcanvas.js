window.fabric && (function(fabric){
  fabric.fastCanvas = function(_super){
    var __hasProp = {}.hasOwnProperty;
    var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };
    return (function(_super) {
      __extends(fastCanvas, _super);
      function fastCanvas() {
        this.frame;
        fastCanvas.__super__.constructor.apply(this, arguments);
      }
      fastCanvas.prototype.renderAll = function() {
        var args = arguments;
        var that = this;
        window.cancelAnimationFrame(this.frame);
        this.frame = window.requestAnimationFrame(function(){
          fastCanvas.__super__.renderAll.apply(that, args);
        });
      };
      return fastCanvas;
    })(_super || fabric.Canvas);
  };
})(window.fabric);