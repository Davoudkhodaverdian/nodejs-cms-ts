import Controller from "./../../controller";
import { NextFunction, Request, Response } from 'express';
import { body } from 'express-validator';
import User, { IUser } from "../../../../models/user";
import Transform from "../../../../transform";

class RegisterController extends Controller {

  validators = [
    // if we dont have withMessage property,the message is defualt
    body('firstName').notEmpty().withMessage('firstName is required'),
    body('lastName').notEmpty().withMessage('lastName is required'),
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
    let newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    newUser.save((error: Error, user: IUser) => {
      if (error) {
        if (error?.['code'] == 11000 && Object.keys(error?.['keyValue']).includes('email')) {
          return res.status(409).send({
            error: {
              // message: 'This email user is already in use!',
              message: 'این ایمیل قبلا استفاده شده است، لطفا وارد شوید',
              response: {
                message: 'This email user is already in use!',
              },
            },
            status: 409
          });
        } else {
          return res.status(409).send({
            error: {
              // message: 'This email is not found!',
              message: 'متاسفانه خطایی رخ داده است',
              response: {
                message: 'This email is not found!',
              },
            },
            status: 409
          });
        }
      } else {
        //create token
        return res.status(200).json({
          message: 'The user has been registerd with us!',
          response: {
            data: {
              ...(new Transform().transform<IUser>(
                user,
                ['firstName', 'lastName', 'email', "phoneNumber", "created_at", "updated_at"]
              )),
              token: createToken(user._id)
            }
          },
          status: 200
        });
      }
    });
  }
}

export default new RegisterController();