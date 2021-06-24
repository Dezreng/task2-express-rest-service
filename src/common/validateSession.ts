import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import User from '../entity/user.model';
import config from './config';

const validateSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  if (req.method === 'OPTIONS') {
  	next();   // allowing options as a method for request
  } else {
  	const sessionTokenAndBeard = req.headers.authorization;
		
    console.log(sessionTokenAndBeard);
    if (!sessionTokenAndBeard || sessionTokenAndBeard.split(' ')[0] !== 'Bearer') {
			res.status(401).send({ auth: false, message: "No token provided." });
		} else {
			const sessionToken = sessionTokenAndBeard.split(' ')[1];

    	jwt.verify(sessionToken, config.JWT_SECRET_KEY, async (err, decoded) => {
				if (decoded) {
					await User.findOne({ where: { id: decoded['id'], login: decoded['login'] } }).then(user => {
						if (user) {
       				next();
						} else {
							res.status(403).send({ error: "User not found" });
						}});
				} else {
					res.status(401).send({ error: "not authorized", err1: err });
				}
    	});
		}
  }
}

export { validateSession };