import express from 'express'
import { createUser } from '../../controllers/usersControllers/userControllers.js';
import { attemptLogin, handleGetLogin, handleLogout,} from '../../controllers/usersControllers/authController.js';

const router = express.Router();

router.post('/register', createUser)
router.post('/login', attemptLogin)
router.get('/login', handleGetLogin)
router.delete('/login', handleLogout)

export default router;