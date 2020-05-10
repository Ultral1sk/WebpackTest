# Webpack 2 Basics
1 - Starting with a git init 
1.5 - inside the json folder we need to give webpack a clue which file should find basically where to start its journey
we start inside the "script" with the following : 
"build": "webpack src/js/app.js dist/bundle.js" 

- since now we gave webpack a clue which file to run when it s starting the next step is also tell webpack ON which dependency does this file run (or which depencency does this file use)
Then it'll start to run and will try to understand which imports exports files does this file use, then it'll merge that code into a one bundle 


2 - Right now the code is spreaded out but where tha appstarts is in app.js with the run function.
- What this means is we are spreading the code manually without webpack

// ***** MAIN PART ***** //

installing webpack
1 - npm install --save-dev webpack webpack-cli
1.5 -   "scripts": {"start" : "webpack" },
2   - now when ew start the weback it looks for an entry that is why we create index.js inside the src folder and npm start to test it. Then It'll create a folder for  us with the name dist and some weboack code magic inside, if we can see our code at the end of the code inside the file it means we are proceeding into the right direction
2.5 - since right now dist/main.js is going to be our entry for the webpack we need to slowly transfer our code from app to main.js by using import export