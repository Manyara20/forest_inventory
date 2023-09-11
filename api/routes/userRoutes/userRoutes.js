import express from 'express'
import { createUser } from '../../controllers/usersControllers/userControllers.js';
import { attemptLogin, handleGetLogin, handleLogout,} from '../../controllers/usersControllers/authController.js';
import { subcompartment } from '../../controllers/usersControllers/subcompartController.js';

const router = express.Router();

router.post('/register', createUser)
router.post('/login', attemptLogin)
router.post('/subcompartment', subcompartment)
router.get('/login', handleGetLogin)
router.delete('/login', handleLogout)

export default router;