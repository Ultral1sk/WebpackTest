# Webpack 2 Basics
1 - Starting with a git init 
1.5 - inside the json folder we need to give webpack a clue which file should find basically where to start its journey
we start inside the "script" with the following : 
"build": "webpack src/js/app.js dist/bundle.js" 

- since now we gave webpack a clue which file to run when it s starting the next step is also tell webpack ON which dependency does this file run (or which depencency does this file use)
Then it'll start to run and will try to understand which imports exports files does this file use, then it'll merge that code into a one bundle 


2 - Right now the code is spreaded out but where tha appstarts is in app.js with the run function