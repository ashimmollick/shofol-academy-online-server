const express = require('express')
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())

const educations = require('./data/catagories.json')
const eduDescription = require('./data/education-description.json')
app.get('/', (req, res) => {
    res.send('Class API Runnign')
});
app.get('/educations', (req, res) => {
    res.send(educations)
});
app.get('/eduDescription', (req, res) => {
    res.send(eduDescription)
});
app.get('/eduDescription/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const select_News = eduDescription.find(n => n.id === id);
    res.send(select_News)


});





app.listen(port, () => {
    console.log('News Api', port)
})