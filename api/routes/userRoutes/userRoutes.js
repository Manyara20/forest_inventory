import express from 'express'
import { createUser } from '../../controllers/usersControllers/userControllers.js';

import { attemptLogin, handleGetLogin, handleLogout,} from '../../controllers/usersControllers/authController.js';
import { getConservancy, getCounty, getStation } from '../../controllers/dropdownController.js';
import { management_insert } from '../../controllers/plantationmgtControllers/managementController.js';


const router = express.Router();

router.post('/register', createUser)
router.post('/login', attemptLogin)
router.post('/subcompartment', management_insert)
router.get('/login', handleGetLogin)
router.delete('/login', handleLogout)

///Dropdown route
router.get('/conservancy', getConservancy)
router.get('/county/:conservancy_id', getCounty)
router.get('/station/:county_id', getStation)

export default router;