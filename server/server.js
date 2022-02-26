import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react';
import ReactDomServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
import App from '../src/App'

const PORT = 8000;
const app = express()

const router = express.Router()

app.use('/build', express.static('build'));

app.use((req, res, next) => {
    if (/\.js|\.jsx|\.scss|\.css|\.png|\.svg|\.jpg/.test(req.path)) {
        res.redirect('/build' + req.path)
    }
    else {
        next();
    }
})

app.get('*', (req, res) => {
    const context = {}
        const app = ReactDomServer.renderToString(
            <StaticRouter location={req.url} context={context} >
                <App />
            </StaticRouter>
        );
    console.log(app)
    const indexFile = path.resolve('./build/index.html')
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.log("err")
            return res.status(500).send('oops', "err")
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`))
    })
})
router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '10d' }))
app.use(router)
app.listen(PORT, () => {
    console.log("SSR port is :" + PORT)
})