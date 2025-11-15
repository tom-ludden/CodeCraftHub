const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.Console()
    ]
});
<<<<<<< HEAD
module.exports = logger;
=======
module.exports = logger;
>>>>>>> 63adbaa (Initial commit)
