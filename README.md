jQuery-canvas-sparkles
======================

A little jQuery plugin for making DOM elements sparkle (uses Canvas)  
[Temporary demo site up](http://simeydotme.github.io/jQuery-canvas-sparkles/)

###example
![Example of the Canvas Sparkles Plugin in use](http://files.simey.me/sparkles.gif "Canvas Soarkles")

###notes
- looks sexy
- straight out of 90's DHTML days, but with canvas!!!
- Wont work < IE9
- Requires RAF Polyfill for old-ish browsers
- pointer-events doesnt work in IE9, meaning no singleton DOM support (img,hr,br,input) unless wrapped in a DIV
- can look funny at start if your styles take a while to render (just delay load)
