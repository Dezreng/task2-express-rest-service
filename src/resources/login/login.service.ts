import { UserLogin } from '../../common/interfacesAndTypeDB';
import loginRepo from './login.repository'

const signIn = (reqBody: UserLogin) => loginRepo.signIn(reqBody);

export default { signIn };