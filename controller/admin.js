const User = require('../models/admin')

exports.createUser = async (req, res)=> {
    try {
        const { username, email, password } = req.body;
        const userExists = await User.findOne({where : {email: email}});
        if(userExists){
             return res.status(409).json({
             message: 'Email already exists'
            });
        }
        const newUser = await User.create({
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
            message: 'internal Server error'
        });
        
    }
};


exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ 
                message: 'User not found' });
        }

        // Compare passwords (assuming plaintext storage, which is not secure)
        if (password !== user.password) {
            return res.status(400).json({ 
                message: 'Incorrect password' });
        }

        // Successful login
        res.status(200).json({
            message: 'Logged in successfully',
            data: user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};



// exports.userLogin = async (req, res) => {
//     try {
//         const {password, email } = req.body;
//         const checkPassword = await User.findOne({ email: email })

//         if(password != checkPassword.dataValues.password){
//             res.status(400).json({
//                 message: 'Incorrect password'
//             })
//         }else{
//             res.status(200).json({
//                 message: 'Logged in successfully',
//                 data: checkPassword
//             })
//         }
        
//     } catch (error) {
//         res.status(500).json({
//             message: 'Internal Server error'
//         })
        
//     }
// }

exports.getAllUsers = async (req, res) => {
    try{
        const allUsers = await User.findAll();
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
        const user = await User.findByPk(id);
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
        const user = await User.findAll({where : {id:id}});
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
            await User.update(data, {where: {id: id}});
            const updatedUser = await User.findAll({where: {id: id}});

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

        const user = await User.findAll({where: {id: id}});
        if(user.length == 0){
            return res.status(404).json({
                message: 'Not deleted'
            })
        } else {
            await User.destroy({where: {id: id}});
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