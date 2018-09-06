//import { request } from 'https';
//import { url } from 'inspector';

const express= require('express');
const bodyParser=require('body-parser');
const logger= require('morgan');
const cookieParser= require('cookie-parser');


const app = express();

app.use(logger());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":"true"}));

app.use(cookieParser());

const portno =process.env.PORT || 3001;
app.listen(portno,(request,response,error)=>{
    if(error)
        console.log(error);
     else
        console.log(`App started successfully on port ${portno}`);   
});

app.get('/hello',(request,response,error)=>{
    response.status(200);
    response.send('hello world');
}
);

app.get('/hello/:id',(request,response,error)=>{
    const id = request.params.id;
    const query = request.query.id;
    response.status(200);
    response.send(`hello world ${id} and query string is ${query}`);
}
);

app.get('/',(request,response,error)=>{
    /* response.status(200);
    response.write('<html>');
    response.write('<body>'); 
    response.write('Hello, you are on the home page');
    response.write('</body>');
    response.write('</html>');*/
    response.write('Hello,you have no body');
    response.end();
}
);