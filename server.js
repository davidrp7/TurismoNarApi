const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000


let places = [
    {titulo: 'Laguna de la Cocha', ubicacion: 'Pasto', ilust:'http://xn--nario-rta.gov.co/turismo/images/lcocha1.jpg?crc=126793232'},
    {titulo: 'Santuario de las Lajas', ubicacion: 'Ipiales', ilust:'http://www.lanacion.com.co/wp-content/uploads/2017/10/Catedral-de-las-Lajas-696x392.jpg'},
	{titulo: 'Museo Taminango', ubicacion: 'Pasto', ilust:'http://farm4.static.flickr.com/3778/12997665185_072be9162f.jpg'},
	{titulo: 'Volcan de Cumbal', ubicacion: 'Cumbal', ilust:'http://www.colombia.travel/sites/default/files/styles/activity_banner/public/24_procolombia.jpg?itok=tYBOEPpt'},
	{titulo: 'Museo del Oro', ubicacion: 'Pasto', ilust:'http://proyectos.banrepcultural.org/museo-del-oro-narino/sites/default/files/adjuntos/monarino02_1.jpg'},
	{titulo: 'Volcan Galeras', ubicacion: 'Pasto', ilust:'http://p8.storage.canalblog.com/87/70/1014638/77045482_o.jpg'},
	{titulo: 'Volcan Azufral', ubicacion: 'Tuquerres', ilust:'http://www.colparques.net/images/azufral/4.jpg'},
	{titulo: 'Parque Sanquianga', ubicacion: 'El charco', ilust:'http://www.colparques.net/images/sanquianga/4.jpg'},
	{titulo: 'Parque Chimayoy', ubicacion: 'Pasto', ilust:'http://www.turismopasto.gov.co/images/ecologico/chimayoy.jpg'}
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// http://127.0.0.1:5000
app.get('/', (req, res) => {
    res.status(200).send("Bienvenido a TURISMO API REST")
})

// http://127.0.0.1:5000/places
app.get('/places', (req, res) => {
    res.send(places)
})

// http://127.0.0.1:5000/places
app.post('/places', (req, res) => {
    let data = req.query;
    places.push(data.place_name)
    res.send("New place add")
})

// http://127.0.0.1:5000/places
app.patch('/places/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    places[params.id] = data.place_name
    res.send("place update")
})

// http://127.0.0.1:5000/places
app.delete('/places/:id',(req, res) => {
    let params = req.params;
    places.splice(params.id, 1);
    res.send('place delete')
})

// Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})