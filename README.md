# fabricjs-viewport-grabnmove

Add `grab and move` style support on a `fabricjs` viewport.

Note , it requires `fabric.fastCanvas`, see example below.

```js

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.4.0/fabric.min.js"></script>
<script src="fabricjs_viewport.js"></script>
<script src="fabricjs_fastcanvas.js"></script>
<script src="fabricjs_viewport_grabnmove.js"></script>
<script>

var c = new fabric.CanvasWithViewport("id-of-your-canvas");

c.enableGrabbing();
c.setZoom(c.viewport.zoom*1.1); // zoom in by 10%

</script>

```

# notes

Let s see.
