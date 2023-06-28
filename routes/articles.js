import express from 'express';
import axios from 'axios';


const router =express.Router();
router.use('/:subreddit', (req,res)=> {
    const { subreddit } = req.params;
    const subredditUrl = `https://www.reddit.com/r/${subreddit}/.json?limit=5`;
    axios.get(subredditUrl)
      .then(response => {
        const jsonData = response.data;
        const relevantData = jsonData.data.children.map((item) => ({
            title: item.data.title,
            author: item.data.author,
            discussion_type: item.data.discussion_type,
            view_count: item.data.view_count,
            score: item.data.score,
            num_comments: item.data.num_comments,
            url: item.data.url,
          }));
          
          res.json(relevantData);
          
      })
      .catch(error => {
        console.error('Error retrieving JSON data:', error);
      });
}
);
export default router;
