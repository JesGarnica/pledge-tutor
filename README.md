## Development Environment

Download [[Visual Studio Code](https://code.visualstudio.com/Download)
Please be sure to download [git](https://git-scm.com/downloads) to clone both Knight Tutor and Knight Server repos.
Install [npm (package manager)](https://www.npmjs.com/package/npm) to run the code from both repos. 

## How to run Knight Tutor

In order to run successfully Knight Tutor, you must clone both the Knight Tutor and Knight Server repositories.

In the directory of your choice, you can run:

```
git clone https://github.com/JesGarnica/knight-tutor
git clone https://github.com/JesGarnica/knight-server
```

Once cloned, in both ./knight-tutor and ./knight-server directories, you must run:

```
npm install
```

This will install the neccessary dependencies for both Tutor and Server

If you try to run ``` npm start ```, you will notice that Knight Server 
will start to complain about a missing ``` .env file ``` that is needed by MongoDB 
to connect to a database to store back-end application data.

In the root directory of ./knight-server, run this command to create a ``` .env ```:
```
nano .env
```

While in nano or your favorite editor, enter your MongoDB database credentials as seen below:
``` 
MONGO_DB_NAME=dummy_name
MONGO_USER=username
MONGO_PASSWORD=password
MONGO_HOST=localhost
MONGO_PORT=11111
```

It is now possible to run ``` npm start ``` in first ./knight-server and ./knight-tutor

This will run the front-end and back-end in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


Now you have your own mini Canvas-like app for your Greek organization!
