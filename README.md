jQuery-canvas-sparkles
======================

A little jQuery plugin for making DOM elements sparkle (uses Canvas)  
[Temporary demo site up](http://simeydotme.github.io/jQuery-canvas-sparkles/)

###Install
You may download the files in the `/dist/` folder.

------------------------------------  
  
###Requirements:
  - jQuery (1.9+)
  
------------------------------------  
  
###Installation:   
Include the plugin javascript file __after__ jQuery.

###Example
![Example of the Canvas Sparkles Plugin in use](http://files.simey.me/sparkles.gif "Canvas Soarkles")

###Usage
```js
$(".element").sparkle();
```

###Options
You can pass an options object to make this interesting like so:
```js
$(".element").sparkle({
  color: "#FFFFFF",
  count: 30,
  overlap: 0,
  speed: 1,
  minSize: 4,
  maxSize: 7,
  direction: "both"
});
```

####Color
Accepts a HEX string, or `"rainbow"` or an array of HEX strings:
```js
$(".element").sparkle({
  color: "#FFFFFF"
});

$(".element2").sparkle({
  color: ["#FFFFFF","#FF0000","#00FFFF"]
});

$(".element3").sparkle({
  color: "rainbow"
});
```

####Count
Accepts a number to determine how many sparkles will be on the element at a time. Larger elements need more sparkles, but after a few hundred things can bog down.
```js
$(".element").sparkle({
  count: 50
});
```

####Overlap
Accepts a nummber which tells the canvas how far over the edge of it's container it should overlap in pixels.
```js
$(".element").sparkle({
  overlap: 20
});
```

####Speed
Accepts a floating point number to set the speed multiplier, you may need to experiment with this
```js
$(".element").sparkle({
  speed: 1.2
});
```

####Size
Accepts a number for both min/max to set the size in pixels of the sparkles. Sizes are randomized between min and max.
```js
$(".element").sparkle({
  minSize: 2,
  maxSize: 6
});
```

####Direction
Accepts a string of `"up"`, `"down"` or `"both"` to set which direction the sparkles will travel in.
```js
$(".element").sparkle({
  direction: "both"
});

$(".element2").sparkle({
  direction: "up"
});

$(".element3").sparkle({
  direction: "down"
});
```


###Events
We can trigger the start and stop of the sparkles, as well as reset the positions with events.

####start.sparkle
triggering the start event will activate the sparkles
####stop.sparkle
triggering the stop event will fade the sparkles out and turn them off
####resize.sparkle
triggering the resize event will reset the positions of the sparkles and resize the canvas to match it's container.

```js
// first we need an element with sparkles
$("header").sparkle();

// here we can remove the default mouse/keyboard triggers for sparkles,
// perhaps we don't want them to trigger on interaction
$("header")
    .off("mouseover.sparkle")
    .off("mouseout.sparkle")
    .off("focus.sparkle")
    .off("blur.sparkle")

// we can also trigger the start/stop events on the element
// which has the sparkles bound to it!
$("header")
    .trigger("start.sparkle")
    .on("click", function() {
        $(this).trigger("stop.sparkle");
    });
    
// it's also possible to resize teh canvas and reposition 
// the sparkles whenever the browser is resized...
var timer;
$(window).on("resize", function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
        $("header").trigger("resize.sparkle");
    },200);
});
```



-----

###notes
- looks sexy
- straight out of 90's DHTML days, but with canvas!!!
- Wont work < IE9
- Requires RAF Polyfill for old-ish browsers
- pointer-events doesnt work in IE9, meaning no singleton DOM support (img,hr,br,input) unless wrapped in a DIV
- can look funny at start if your styles take a while to render (just delay load)
