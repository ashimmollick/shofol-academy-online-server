const express = require('express')
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())

const catagories = require('./data/Catagories.json');
const news = require('./data/news.json')
app.get('/', (req, res) => {
    res.send('News API Runnign')
});
app.get('/news', (req, res) => {
    res.send(news)
});
app.get('/news-catagories', (req, res) => {
    res.send(catagories)
});
app.get('/catagory/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news)
    }
    else {
        const select = news.filter(n => n.category_id === id);
        res.send(select)
    }

});
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectNews = news.find(n => n._id === id);
    res.send(selectNews)

});
app.listen(port, () => {
    console.log('Dragon News', port)
})