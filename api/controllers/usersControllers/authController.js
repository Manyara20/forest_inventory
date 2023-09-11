import createError from "../../createError.js";
import pool from "../../models/postgres.js";
import bcrypt from 'bcrypt'

export const handleGetLogin = (req, res,) => {

    if (req.session.user && req.session.user.email) {
      res.status(200).json({ loggedIn: true, email: req.session.user.email, id: req.session.user.id});
    } else {
      res.status(200).json({ loggedIn: false });
    }
  };
  
export const attemptLogin = async (req, res, next) => {

    const potentialLogin = await pool.query(
      "SELECT id, email, password FROM users u WHERE u.email=$1",
      [req.body.email]
    );

    if(potentialLogin.rowCount===0) {
      return next(createError(401, "User Does Not Exist"))
    };

    const isSamePass = await bcrypt.compare(
      req.body.password,
      potentialLogin.rows[0].password);

    if(!isSamePass) return next(createError(401,"Wrong Username or Password"));

    req.session.user = {
      email: req.body.email,
      id: potentialLogin.rows[0].id,
    };

    res.status(200).json({ loggedIn: true, email: req.body.email,  id: req.session.user.id,  message: "Logged in Succesfully" });
  };


  export const handleLogout = (req, res, next) => {
    if (req.session) {
      req.session.destroy(err => {
        if (err) {
          return next(createError(400, "Unable to Log You Out"));
        } else {
          res.clearCookie('sid');
          return res.status(200).send("Logout Successful");
        }
      });
    } else {
      return next(createError(400, "You are not logged in"));
    }
  };
  