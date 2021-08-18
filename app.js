const express = require ('express');

/*Para que podamos escribir rutas de forma unificada en cualquier sistema operativo */
const path = require ('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
/*Para decirle que queremos hacer uso de metodos estaticos*/

app.use(express.static(publicPath));


app.listen(3001, ()=>
console.log('Servidor corriendo'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});