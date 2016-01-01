window.fabric && (function(fabric){
// see below
  var fastCanvas = fabric.fastCanvas(fabric.CanvasWithViewport);
  function Workspace(el){
    this.el = $(el);
    this.scene = new fastCanvas(el);
  }
  var mouseDown = false;
  var spacePressed = false;
  var lastEv;
  Workspace.prototype.enableGrabbing = function(){
    var that = this;
    $(document)
      .on('mousemove.spaceGrab', function(ev){
        lastEv = ev;
      })
      .on('mousedown.spaceGrab', function(ev){
        mouseDown = true;
      })
      .on('mouseup.spaceGrab', function(ev){
        mouseDown = false;
      })
      .on('keydown.spaceGrab', _.throttle(function(ev){
        if(!spacePressed){
          spacePressed = ev.keyCode===32 && mouseDown;
          if(spacePressed){
            that.scene.selection =!spacePressed;
            that.scene.isGrabMode = spacePressed;
            that.scene.setCursor('grabbing');
            that.scene.__onMouseUp(lastEv);
            that.scene._onMouseDownInGrabMode(lastEv);
            that.scene.renderTop();
          }
        }
        if(spacePressed) ev.preventDefault();
      },5))
      .on('keyup.spaceGrab', _.throttle(function(){
        if(spacePressed){
          spacePressed = false;
          that.scene.setCursor('auto');
          that.scene.isGrabMode = spacePressed;
          that.scene.selection = !spacePressed;
          that.scene.__onMouseUp(lastEv);
          that.scene._onMouseUpInGrabMode(lastEv);
        }
      },5));
  };
  Workspace.prototype.disableGrabbing = function(){
    $(document)
      .off('mousemove.spaceGrab')
      .off('mousedown.spaceGrab')
      .off('mouseup.spaceGrab')
      .off('keydown.spaceGrab')
      .off('keyup.spaceGrab');
  };

  return Workspace;
})(window.fabric);