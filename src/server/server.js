import express from 'express';
import ReactDom from 'react-dom/server'; 
import { Header } from '../shared/Header';

const app = express(); 

app.get('/', (req, res) => {
    res.send(
        ReactDom.renderToString(Header()),
    )
})

app.listen(3000, () => {
    console.log('Server run on http://localhost:3000')
})