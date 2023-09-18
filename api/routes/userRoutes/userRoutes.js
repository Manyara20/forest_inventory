import express from 'express'
import { createUser, getAllUsers } from '../../controllers/usersControllers/userControllers.js';

import { attemptLogin, handleGetLogin, handleLogout,} from '../../controllers/usersControllers/authController.js';
import { getConservancy, getCounty, getStation } from '../../controllers/dropdownController.js';
//import { subcompartment } from '../../controllers/usersControllers/subcompartController.js';
import { createPermission, getPermissions, updatePermission } from '../../controllers/permissionControllers.js';
import { addRolePermissions, createRole, getRolePermisions, getRoles, removeRolesPermission, updateRole } from '../../controllers/roleControllers.js';
import { addModelRoles, getUserRoles, removeUserRole,  } from '../../controllers/usersRoles.js';
import { editManagement, management_insert, searchManagement } from '../../controllers/plantationmgtControllers/managementController.js';

const router = express.Router();

router.post('/register', createUser)
router.get('/users', getAllUsers)
router.post('/login', attemptLogin)
// router.post('/subcompartment', subcompartment)
router.get('/login', handleGetLogin)
router.delete('/login', handleLogout)

///Dropdown routecd
router.get('/conservancy', getConservancy)
router.get('/county/:conservancy_id', getCounty)
router.get('/station/:county_id', getStation)

//permisions
router.get('/permissions', getPermissions)
router.post('/permissions', createPermission)
router.patch('/permissions/:id', updatePermission)

//roles
router.get('/roles', getRoles)
router.get('/roles_permissions', getRolePermisions)
router.post('/roles', createRole)
router.patch('/roles/:id', updateRole)
router.post('/roles_permissions/:id', addRolePermissions);
router.delete('/role_permissions/:id', removeRolesPermission)

//user roles

router.get('/user_roles', getUserRoles);
router.post('/user_roles', addModelRoles);
router.delete('/user_roles/:id', removeUserRole)

//

router.post('/subcompartment', management_insert)
router.get('/managementSearch', searchManagement)
router.patch('/subcompartment/:id', editManagement)







export default router;