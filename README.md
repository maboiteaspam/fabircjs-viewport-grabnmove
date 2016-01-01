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

var workspace = new Workspace("id-of-your-canvas")
workspace.enableGrabbing();

var canvas = workspace.scene;
canvas.setZoom(canvas.viewport.zoom*1.1); // zoom in by 10%

var triangle = new fabric.Triangle({
    width: 100, height: 100, left: 50, top: 300, fill: '#cca'
});
canvas.add(triangle);

</script>

```

# Dev

kick start your dev like this

```bash
git clone ...
npm install http-server -g
http-server . -p 8080 -o
```


# notes

Let s see.
