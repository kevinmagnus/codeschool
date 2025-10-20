import express from 'express';
import path from 'path';


const app = express();
const port = process.env.PORT || 3040;
const __dirname = path.resolve();


app.use(express.static('public'));




const posts = [


    {

        id : '1',
        new_post: "This is my first post.",
        important: "true",

    },

    {

        id: "2",
        new_post: "This is my second post",
        important: "true",


    },

    {

        id: "3",
        new_post: "This is my third post.",
        important: "true",
    }


];







app.get('/', (request, response) => {

    

  response.sendFile(path.join(__dirname, 'public', 'Home.html') );

});


app.get('/Front-End', (request, response) => {

response.sendFile(path.join(__dirname, 'public', 'Front-End-Learn-More.html'));

});


app.get('/Sign-Up', (request, response) => {


    response.sendFile(path.join(__dirname, 'public', 'Sign-Up.html'));

});

app.get('/users/posts', (request, response) => {

    response.json(posts);

});



app.get('/Back-End', (request, response) => {

response.sendFile(path.join(__dirname, 'public', 'Back-End.html'));

});


app.get('/Back-End-Enroll', (request, response) => {

response.sendFile(path.join(__dirname, 'public', 'Back-End-Enroll.html'));

});


app.listen(port,'0.0.0.0', () => {

    console.log(`Server is running on port ${port}.`);

});