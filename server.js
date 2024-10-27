import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import env from './server/envConfig.js'
import routes from './server/routes.js'
import { renderError } from './server/errorHandler.js'


const dirname = path.dirname(fileURLToPath(import.meta.url))
//console.log(dirname)

const app = express()
app.use(morgan('dev'))
app.set('view engine', 'pug')
app.set('views', path.join(dirname, 'views'))
app.use(cors())
app.use(express.json())

// Rutas para API y React en `/home`
app.use(routes) 

if (env.Status === 'development') {
    // En desarrollo servir archivos desde src

    app.use(express.static(path.join(dirname, 'src')))

    app.get('/', renderError((req, res) => {
        // Renderizar la vista principal en Pug para el entorno de desarrollo
        res.render('product', {url: "http://localhost:5173/form"})
    }))
    app.get('/form', renderError((req, res) => {
        res.render('indexDev');
    }));
    // app.get('*', renderError((req, res) => {
    //     res.render('indexDev');
    // }));
   
} else {
    // En producción, servir archivos desde `dist`

    app.use(express.static(path.join(dirname, 'dist/assets')))

    app.get('/',  renderError((req, res) => {
        res.render('product',  {url: "/form"});
    }));
    app.get('/form',  renderError((req, res) => {
        res.render('index');
    }));
    // app.get('*', renderError((req, res) => {
    //     res.render('index');
    // }));
}

 app.use((req, res, next)=>{
    res.render('error', { message: 'Not Found', status: 404});
  });

// Manejador de errores
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Error';
    console.error('Error: ', error);
    res.status(status).json(message)
    res.render('error', { message: message, status: status});
});

app.listen(env.Port, () => {
    console.log(`Server is listening at http://localhost:${env.Port}\nServer in ${env.Status}`);
});
