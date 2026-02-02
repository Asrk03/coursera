import express from "express"

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Coursera');
})

app.post('/signup', (req, res) => {
    res.send('SignUp Page')
})

app.post('/login', (req, res) => {
    res.send('Logging Page')
})

app.get('/courses', (req, res)=>{
    res.send('All Courses')
})

app.post('/purchase', (req, res)=>{
    res.send('Puschase Course')
})

app.get('/purchased', (req, res)=>{
    res.send('Purchased Course')
})

app.post('/al', (req, res)=>{
    res.send('Admin Login')
})

app.post('/as', (req, res)=>{
    res.send('Admin SignUp')
})

app.post('/acc', (req, res)=>{
    res.send('Admin Create Course')
})

app.delete('/adc', (req, res)=>{
    res.send('Admin Delete Course')
})

app.post('/addc', (req, res)=>{
    res.send('Admin Add Course')
})

app.listen(port, () => {
    console.log(`Example app listening on port localhost:${port}/`);
})
