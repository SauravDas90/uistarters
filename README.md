nodemon-debugging 
This branch contains a sample for debugging node while running nodemon in vscode

please check the .vscode --> launch.json
It contains 4 different configurations for debugging the node files,
the node:nodemon can be utilized to debug the node.js files.

Also check the package.json file for the script 
use the following command, if you are on bash shell in vscode

--sudo npm run start

launch.json cofig

{
        "name": "node:nodemon",
        "type": "node",
        "request": "attach",
        
        "restart": true,
        "protocol": "inspector"

}

this works with node -v --> 8.9.2
npm -v --> 5.5.1
