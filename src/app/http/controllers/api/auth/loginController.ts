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
      if (error) {
        return res.status(409).send({
          error: {
            response: error,
            message: 'متاسفانه خطایی رخ داده است',
            status: 409
          }
        });
      }
      if (!user) {
        return res.status(409).send({
          error: {
            // message: 'This email is not found!',
            message: 'چنین ایمیلی ثبت نشده است، لطفا ثبت نام کنید',
            response: {
              message: 'This email is not found!',
            },
          },
          status: 409
        });
      } else {

        bcrypt.compare(req.body.password, user.password, function (error, result) {
          if (error) {
            return res.status(409).send({
              error: {
                response: error,
                message: 'متاسفانه خطایی رخ داده است',
                status: 409
              }
            });
          }
          // result == false
          if (!result) {
            return res.status(409).send({
              error: {
                response: { message: "The password is incorrect" },
                message: 'پسورد وارد شده صحیح نمی باشد',
              },
              status: 409
            })
          }
          //create token
          return res.status(200).json({
            message: 'The user has been registerd with us!',
            response: {
              data: {
                ...(new Transform().transform<IUser>(
                  user,
                  ['firstName', 'lastName', 'email', "phoneNumber", "createdAt", "updatedAt"]
                )),
                token: createToken(user._id)
              }
            },
            status: 200
          });
        });

      }

    });
  }

}

export default new LoginController();