import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import User from '../entity/user.model';
import config from './config';
import ErrorLogin from '../error/ErrorLoging';
import ErrorNotAutorized from '../error/errorNotAuthorized';

const validateSession = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  if (req.method === 'OPTIONS') {
  	next();   // allowing options as a method for request
  } else {
  	const sessionTokenAndBeard = req.headers.authorization;
		
    console.log(sessionTokenAndBeard);
    if (!sessionTokenAndBeard || sessionTokenAndBeard.split(' ')[0] !== 'Bearer') {
			next(new ErrorNotAutorized("No token provided or not Beard"));
		} else {
			const sessionToken = sessionTokenAndBeard.split(' ')[1];

    	jwt.verify(sessionToken, config.JWT_SECRET_KEY, async (_err, decoded) => {
				if (decoded) {
					await User.findOne({ where: { id: decoded['id'], login: decoded['login'] } }).then(user => {
						if (user) {
       				next();
						} else {
							next(new ErrorLogin("User not found"))
						}});
				} else {
					next(new ErrorNotAutorized("No autorizedet"));
				}
    	});
		}
  }
}

export { validateSession };