import Controller from "../../controller";
import { NextFunction, Request, Response } from 'express';

import { body } from 'express-validator';
import mongoose from "mongoose";

class LoginController extends Controller {

  validators = [
    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }).withMessage('must be at least 5 chars long')

  ]

  index(req: Request, res: Response) {

    res.json({
      email: req.body.email,
      password: req.body.password
    });
  }

  validate(req: Request, res: Response, next: NextFunction) {
    this.validateExpressValidator(req, res, next);
  }

  createUserSample(req: Request, res: Response) {

    const UserSchema = new mongoose.Schema({
      name: { type: String, required: true }, // String is shorthand for {type: String}

    });

    const User = mongoose.model('User', UserSchema);
    new User({ firstName: "ygyg",lastName:"uhhguhuh", email: "dfgg@gmail.com",password: "123456"}).save(err => {
      if (err) throw err;
    });
    res.json({ firstName: "Davoud" });
  }
}

export default new LoginController();