const express = require( 'express' );
const {User} = require( '../models/user.js' );
const router = express.Router();

const {userProfile, allUsers, signup, updateUserById, updateUserInDB, deleteUser} = require( '../controllers/usersController' );

//--------------  READ: GET single user by id route  ----------------//

router.get( '/:id', userProfile );

//--------------   READ: GET all users router  ----------------//

router.get( '/', allUsers );

//CREATE new user route

//CREATE new user route
// returns form
router.get( '/newuser', async ( req, res ) => {
    console.log( 'Now creating a new user' );
    res.render( './usernewform.ejs' ); // starts at views
} );

// sends data to DB
router.post( '/signup', signup );

//--------------   UPDATE user by id route  ----------------//
// get edit form
router.get( '/updateuser/:id', updateUserById );
router.post('/updateuser/:id', updateUserInDB);


//--------------   DELETE user by id route  ----------------//

router.post( '/delete/:id', deleteUser );

//--------------  And .... export the module  ----------------//

module.exports = router;
