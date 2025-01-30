const username = require('../models/admin')

exports.createUser = async (req, res)=> {
    try {
        const { username, email, password } = req.body;
        const userExists = await username.findOne({where : {email: email.toLowercase()}});
        if(userExists){
             return res.status(409).json({
             message: 'Email already exists'
            });
        }
        const newUser = await username.create({
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            password: password
        });
        res.status(201).json({
            message: 'User created successfully',
            data: newUser
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server error'
        });
        
    }
};

exports.userLogin = async (req, res) => {
    try {
        const {password, email } = req.body;
        const checkPassword = await username.findOne({ email: email })

        if(password != checkPassword.dataValues.password){
            res.status(400).json({
                message: 'Incorrect password'
            })
        }else{
            res.status(200).json({
                message: 'Logged in successfully',
                data: checkPassword
            })
        }
        
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server error'
        })
        
    }
}

exports.getAllUsers = async (req, res) => {
    try{
        const allUsers = await username.findAll();
        res.status(200).json({
            message: 'All users fetched successfully',
            data: allUsers,
            total: allUsers.length
        })
    }catch(error){
        res.status(500).json({
            message: 'Internal Server error' + error.message
        })
    }
};

exports.getOneUser = async (req, res) => {
    try{
        const { id } = req.params;
        const user = await username.findByPk(id);
        if(!user){
            return res.status(404).json({
                message: 'User not found in database'
            })
        }
        res.status(200).json({
            message: 'User fetched successfully',
            data: user,
            total: user.length
        })
    } catch(error){
        res.status(500).json({
            message: 'Internal Server error' + error.message
        })
    }
}
exports.updateUser = async (req, res)=>{
    try{
        const {id } = req.params;
        const {name, email, password } = req.body;
        const user = await username.findAll({where : {id:id}});
        if(user.length == 0){
            return res.status(404).json({
                message: 'User not found in database'
            })
        }else{
            const data = {
                name,
                email,
                password
            };
            await username.update(data, {where: {id: id}});
            const updatedUser = await username.findAll({where: {id: id}});

            res.status(200).json({
                message: 'User updated successfully',
                data: updatedUser
            })
        }
    }catch(error){
        res.status(500).json({
            message: 'Internal Server error' + error.message
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;

        const user = await username.findAll({where: {id: id}});
        if(user.length == 0){
            return res.status(404).json({
                message: 'Not deleted'
            })
        } else {
            await username.destroy({where: {id: id}});
            res.status(200).json({
                message: 'User deleted successfully'
            })
        }
    
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server error' + error.message
        })
        
    }
}