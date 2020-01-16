const express = require('express')
const app = express()

const path = require('path');

const reader = require('./bin/file_reader');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.get('/listDirectory', (req, res) => {
    reader.listFilesInDirectory('git_professionals').then((result) => {
        console.log('directory list: ' + result);
        res.send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500);
        res.send();
    });
});

app.get('/readFile/:name', (req, res) => {
    reader.fileContents('git_professionals', req.params.name).then((result) => {
        console.log('sending contents: ' + result);
        res.send(result);
    }).catch((err) => {
        console.log(err);
        res.status(500);
        res.send();
    });
})

app.get('/assets/:category/:filename', (req, res) => {
    try {
        res.sendFile(path.join(__dirname, 'public/assets/', req.params.category, req.params.filename));
    } catch (e) {
        res.status(500);
        res.send();
    }
})

const server = app.listen(8000, 'localhost', () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('example app is listening at http://%s:%s', host, port);
})
