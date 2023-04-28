import Controller from "../../controller";
import { NextFunction, Request, Response } from 'express';

import { body } from 'express-validator';
import bcrypt from 'bcrypt';
import User, { IUser } from "../../../../models/user";
import Transform from "../../../../transform";

class LoginController extends Controller {

  validators = [
    // if we dont have withMessage property,the message is defualt
    // username must be an email
    body('email').notEmpty().withMessage('email is required'),
    body('email').isEmail().withMessage('email is not valid'),
    // password must be at least 5 chars long
    body('password').notEmpty().withMessage('password is required')
      .isLength({ min: 5 }).withMessage('must be at least 5 chars long')
  ]

  validate(req: Request, res: Response, next: NextFunction) {
    this.validateExpressValidator(req, res, next);
  }

  index(req: Request, res: Response) {


    const createToken = this.createToken;
    User.findOne({ email: req.body.email }, function (error: Error, user: IUser) {

      if (!user) {
        return res.status(422).json({ error: { message: "چنین ایمیلی وجود ندارد" } });
      } else {

        bcrypt.compare(req.body.password, user.password, function (_error, result) {
          // result == false
          if (!result) {
            return res.status(422).json({ error: { message: "پسورد وارد شده صحیح نمی باشد" } });
          }
          //create token
          return res.status(200).json({
            user: new Transform().transform<IUser>(user, ['firstName', 'lastName', 'email']),
            token: createToken(user._id)
          });
        });

      }

    });
  }

}

export default new LoginController();