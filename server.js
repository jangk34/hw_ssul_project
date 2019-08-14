
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json()); // json으로 주고받음
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            "id": 1,
            "image": "https://placeimg.com/64/64/any",
            "name": "장창근",
            "birth": "930103",
            "gender": "남자",
            "job": "리액트신"
        }, {
            "id": 5,
            "image": "https://placeimg.com/64/64/2",
            "name": "김박",
            "birth": "123123",
            "gender": "오리",
            "job": "철밥통"
        }, {
            "id": 3,
            "image": "https://placeimg.com/64/64/3",
            "name": "영니",
            "birth": "123123",
            "gender": "만리",
            "job": "다이어트"
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));