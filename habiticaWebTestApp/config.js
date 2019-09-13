/*var nconf = require('nconf');

nconf.argv()
    .env()
    .file({ file: 'config/config.json' });*/

    const conf = {
        RUTA_GESTION_ARCHIVOS_RAIZ:process.env.RUTA_GESTION_ARCHIVOS_RAIZ,
        RUTA_GESTION_ARCHIVOS_RAIZ:process.env.RUTA_GESTION_ARCHIVOS_RAIZ,
        URLS3:process.env.URLS3,
        JWT_SECRET:process.env.JWT_SECRET
      }
//module.exports = nconf;
module.exports = conf;