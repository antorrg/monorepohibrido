# React + Vite + Express.js + Pug (motor de plantillas)
Ademas de levantar una pagina web con react a través del backend, un servidor de express.js, también logramos crear una app híbrida, una parte estatica, con motor de plantillas pug y MVC, y una parte (detrás del login) con react.js con vite.

Lo mas importante de todo es que logramos hacer un build automatizado (bueno, hubo que reacomodar el index.html que vite genera por defecto en dist) pero a pesar de todo, podemos trabajar en desarrollo y en producción, lo cual me llenó de satisfaccion, ya que vamos comprendiendo un poco mas muchas cosas acerca de las app híbridas. 

Si bien es muy probable que para un cliente termine haciendo una app con next.js, es importantisimo poder combinar, experimentar, y por que no, romper estas app para aprender y ganar experiencia.

Todo lo que viene a continuacion es parte del proyecto original de monorepo adonde solo estaba levantando una app de back y front en un mismo lugar.

- Cabe aclarar que vamos a trabajar con la sintaxis de importacion y exportacion de ECMA6 por lo tanto tenemos que tener declarado en nuestro `package.json` `"type": "module"`.

### Cosas que no habiamos aprendido en el bootcamp:
- Inicializar con la variable `NODE_ENV`.
- Utilizar la carpeta dist (o cualquier otra carpeta) sirviendola desde el server con `res.sendFile` (utilizamos el método `express.static`).

[Acerca de NODE_ENV:](./data/nodeEnv.md)

Luego creamos un proyecto `vite` con React.js y junto con las instalaciones tipicas instalamos tambien : dotenv, express, nodemon, morgan, etc. 

Creamos en la raiz del proyecto un archivo llamado `server.js` y una carpeta a la que vamos a llamar del mismo modo o de alguna otra manera, pero es adonde vamos a desarrollar nuestro servidor.

En nuestro archivo `server.js` tenemos tambien que hacer una pequeñas configuraciones con middlewares, aqui están los links que los explican a fin de enteder mas claramente el contenido del archivo:

[Acerca de __dirname](./data/dirname.md)

[Acerca de static y sendFile](./data/expressStatic.md)

### Levantando la app:

Es necesario instalar además de las dependencias necesarias para nuestra app de react y nuestra app de express, la libreria `concurrently` que nos permitirá correr dos servidores en el mismo package.json (vite y express) y por supuesto cross-env para inicializar la app con la variable de entorno `NODE_ENV`. 

Tenemos luego que cambiar la configuracion de los scripts en el `package.json` para inicializar todo junto, tambien agregarle el comando `start` que vamos a utilizar para levantar la app en producción. 

De esta manera pasariamos de tener esta configuracion:

```json
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
```
A crear esta: 

```json
 "scripts": {
    "dev": "cross-env NODE_ENV=development concurrently \"vite\" \"nodemon server.js\"",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "cross-env NODE_ENV=development concurrently \"vite preview\" \"nodemon server.js\"",
    "start" : "cross-env NODE_ENV=production node server.js"
  },
```

Al levantar la app en desarrollo o en preview van a aparecer dos direcciones: la de vite y la de express, siempre tenemos que elegir la de vite. Con excepcion de `start` en la que solo va a aparecer la direccion de express. De este modo, la app en desarrollo siempre va a estar gestionada por vite, mientras que en produccion (solo tenemos el bundle) el servidor se ocupará de entregar el index.html y luego atender las peticiones json que le haga la app de react. 