import { Router } from 'express';
import loginServis from './login.service';

const router = Router()

router.route('/').post(async (req, res, next) => {
	await loginServis.signIn(req.body).then(token1 => {
		res.status(200).json({ token: token1 })
	}).catch(next);
})

export default router;