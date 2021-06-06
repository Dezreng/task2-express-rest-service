import winston, { format, transports } from 'winston';
import config from '../common/config';

const logger = winston.createLogger({
	level: 'silly',
	format: format.combine(format.colorize(), format.cli()),
	transports: [
  	new winston.transports.File({
  		filename: './loggerinfo/error.log',
    	level: 'error',
    	format: format.combine(
    	format.uncolorize(),
    	format.json()
    	)
  	}),
  	new winston.transports.File({
  		filename: './loggerinfo/info.log',
    	level: 'silly',
    	format: format.combine(
    	format.uncolorize(), 
    	format.json()
    	)
  	})
  ],
	exitOnError: true
});

if (config.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));
}

export default logger;