const router = require('express').Router();

const { createUser, getOneUser, getAllUsers, updateUser, deleteUser, userLogin } = require('../controller/admin')

router.post('/user', createUser);

router.get('/user/:id', getOneUser)

router.get('/user/:id', getAllUsers);

router.put('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);

router.post('/user/:id', userLogin)

module.exports = router