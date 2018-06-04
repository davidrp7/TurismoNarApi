const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000


var places = [
    {
		id: '1', 
		title: 'Laguna de la Cocha', 
		ubc: 'Pasto', 
		img:'http://xn--nario-rta.gov.co/turismo/images/lcocha1.jpg?crc=126793232'	
		
	},
    
	{
		id: '2', 
		title: 'Santuario de las Lajas', 
		ubc: 'Ipiales', 
		img:'http://www.lanacion.com.co/wp-content/uploads/2017/10/Catedral-de-las-Lajas-696x392.jpg'
	},
	
	{
		id: '3', 
		title: 'Museo Taminango', 
		ubc: 'Pasto', 
		img:'http://farm4.static.flickr.com/3778/12997665185_072be9162f.jpg'
	},
	
	{
		id: '4',
		title: 'Volcan de Cumbal', 
		ubc: 'Cumbal', 
		img:'http://www.colombia.travel/sites/default/files/styles/activity_banner/public/24_procolombia.jpg?itok=tYBOEPpt'
	},
	
	{
		id: '5',
		title: 'Museo del Oro', 
		ubc: 'Pasto', 
		img:'http://proyectos.banrepcultural.org/museo-del-oro-narino/sites/default/files/adjuntos/monarino02_1.jpg'
	},
	
	{
		id: '6',
		title: 'Volcan Galeras', 
		ubc: 'Pasto', 
		img:'http://p8.storage.canalblog.com/87/70/1014638/77045482_o.jpg'
	},
	
	{
		id: '7',
		title: 'Volcan Azufral', 
		ubc: 'Tuquerres', 
		img:'http://www.colparques.net/images/azufral/4.jpg'
	},
	
	{
		id: '8',
		title: 'Parque Sanquianga', 
		ubc: 'El Charco', 
		img:'http://www.colparques.net/images/sanquianga/4.jpg'
	},
	
	{
		id: '9',
		title: 'Parque Natural Chimayoy', 
		ubc: 'Pasto', 
		img:'http://www.turismopasto.gov.co/images/ecologico/chimayoy.jpg'
	}
];


//*************************************************************

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.status(200).send("Bienvenido a TURISMO API REST")
})

//*************************************************************


//Listar los lugares
app.get('/places', (req, res) => {
    res.send(places)
})

//*************************************************************


// Validar user and pass 
app.post('/login', (req, res) => {
    let data = req.body;
    let login = [{searchUser: false,id: '0',user: '',password: '',name: '',email: '',img_user:''}];

    users.some(function (value, index, _arr) {
        if( (value.user == data.user) && (value.password == data.pass) ){
            login[0]['searchUser'] = true;
            login[0]['id'] = value.id;
            login[0]['user'] = value.user;
            login[0]['password'] = value.password;
            login[0]['name'] = value.name;
            login[0]['email'] = value.email;
            login[0]['img_user'] = value.img_user;
            return true;
        }else{
            return false;
        }
    });

    res.send(login)
})

// Metodo para crear una cuenta de usuario
app.post('/signup', (req, res) => {
    let data = req.body;
    let consecutive = users.length;
    // let itemUser = {
    //     id: consecutive,
    //     user: data.user,
    //     password: data.pass,
    //     name: data.name,
    //     email: data.email,
    //     img_user: 'https://www.littlemiracles.com.au/wp-content/uploads/2015/08/kid-on-ipad.png'
    // };
    let itemUser = {
        user: data.user,
        password: data.pass,
        name: data.name,
        email: data.email,
        repassword: '123'
    };
    // users.push(itemUser)
    res.send(itemUser)
    // res.send("usuario creado correctamente")
})

//***************************************************************

//Crear y lanzar el servidor
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})