# TApicella.github.io
My personal site

Setup:

sudo npm --global install browserify

sudo npm install react react-dom react-addons-css-transitions react-addons-transition-group react-bootstrap babelify babel-preset-react radium 





Commands to build:

babel --presets react src --out-dir build   #Compiles jsx to js

browserify build/resume.js -o js/resume.js