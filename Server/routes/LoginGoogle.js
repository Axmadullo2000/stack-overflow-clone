const { Router } = require("express");
const passport = require("passport");

const router= Router()

/* register page Google */
router.get('/auth/google', 
    passport.authenticate('google', {scope: ['email','profile']})
)


router.get('/google/collback', 
    passport.authenticate('google', {
        successRedirect:'/registered',
        failureRedirect:"/auth/failure"
    })
);

/* google logout */
router.get('/auth/logout', (req, res) => {
    req.session.destroy();
    res.send("Goodby")
});

router.get('/registered', (req, res) => {
    res.status(200).json(req.user)
})

module.exports = router