const router = require('express').Router();

const { createUser, getOneUser, getAllUsers, updateUser, deleteUser, userLogin } = require('../controller/admin')

router.post('/User', createUser);

router.get('/User/:id', getOneUser)

router.get('/User/:id', getAllUsers);

router.put('/User/:id', updateUser);

router.delete('/User/:id', deleteUser);

router.post('/User-login/', userLogin)

module.exports = router