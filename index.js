import express from 'express';
import bodyParser from 'body-parser';
import articles from './routes/articles.js';

const app= express();
const PORT =5000;
app.use(bodyParser.json());

app.use('/articles',articles)
app.get('/', (req,res)=> {
    res.send('go to http://localhost:5000/articles/"subreddit" to find the information about the subreddit')
})
app.listen(PORT,()=> {console.log(`Server Running on port : http://localhost:${PORT}`)})

