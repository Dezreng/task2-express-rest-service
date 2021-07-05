import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserLogin } from '../../common/interfacesAndTypeDB';
import User from '../../entity/user.model';
import ErrorLogin from '../../error/ErrorLoging';
import config from '../../common/config';


const signIn = async ( reqBody: UserLogin ) => {
	const user = await User.findOne({ login: reqBody.login })

	if (!user) {
		throw new ErrorLogin("Not Found!");
	}

	const matches = bcrypt.compare(reqBody.password, user.password);

	if (matches) {
		const token = jwt.sign({ id: user.id, login: user.login }, config.JWT_SECRET_KEY, { expiresIn: 60 * 60 * 24 * 24 });
		return token;
	} else {
    throw new Error("Passwords do not match.");
	}
}

export default { signIn };