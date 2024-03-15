const User = require('../models/user');
// const uuid = require('uuid');

exports.signin = async (req, res ) => {
    const email = req.body.email;
    let user;

    try{
        user = await User.findOne({email : email});
    } catch(err) {
        console.log(err);
    }

    if(user){
        return res.status(200).json({message: user.password});
    }

    return res.status(200).json({message: "User does not exist"});

};


exports.signup = (req, res) => {
    const user = new User({
        // id: uuid.v4(),
        email: req.body.email,
        password: req.body.password,
        skype_id: req.body.skype_id,
        email: req.body.email,
        password: req.body.password,
        phone_number: req.body.phone_number,
        local_name: req.body.local_name,
        english_name: req.body.english_name,
        age_group: req.body.age_group,
        last_modified_date: req.body.last_modified_date,
    });
    
    //Fucking weak algorithm. Need to work on this
    User.findOne({ username: req.body.username }).exec((err, foundUser) => {
        if (!foundUser) {
            User.findOne({ email: req.body.email }).exec((err, foundUser2) => {
                if (!foundUser2) {
                    user.save()
                    .then((result) => {
                        res.send(result)
                    })
                    .catch((err) => {
                        console.log(err)
                        });
                    res.send('User registration successful');
                } else {
                    res.send(`There is a user registered with email ${req.body.email}`);
                }
            })
        } else {
            res.send(`There is a user registered with username ${req.body.username}`);
        }
    });
};


// exports.findpw = async (req, res, next) => {
//     const username = req.params.username;
//     let user;

//     try{
//         user = await User.findOne({username : username});
//     } catch(err) {
//         console.log(err);
//     }

//     if(user){
//         return res.status(200).json({message: user.password});
//     }

//     return res.status(200).json({message: "User does not exist"});
  
// };

// exports.finduser = async (req, res, next) => {
//     const email = req.params.email;
//     let user;

//     try{
//         user = await User.findOne({email : email});
//     } catch(err) {
//         console.log(err);
//     }

//     if(user){
//         return res.status(200).json({message: user.username});
//     }

//     return res.status(200).json({message: "User does not exist"});
  
// };