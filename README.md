# restaurant-page
mac and cheese restaurant

mkdir restaurant-page
npm init

make 2 folders
mkdir dist and src

make dist/index.html
make src/index.js
make src/other.js

export from other.js
import other.js into index.js

install npm webpack webpack-cli --save //creates lock-json

in json change script to "build": "webpack"

run npm run build // created main.js

add index.html info
Go live with it, it should work

create webpack.config.js 

module.exports={
    mode:"production"
}

npm i webpack-dev-server --save-dev

in webpack 
devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3900
    }

in .json scripts
"start": "webpack-dev-server --open"

use npm start

npm i --save-dev style-loader css-loader