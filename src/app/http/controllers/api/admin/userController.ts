import { Error } from "mongoose";
import Controller from "../../controller";
import { Request, Response } from 'express';
import User, { IUser } from "../../../../models/user";

class UserController extends Controller {

  index(req: Request, res: Response) {
    User.find({}, (err: Error, users: IUser[]) => {
      if (err) res.status(400).send({ err });
      else if (users) res.status(200).json({ users });
    })

  }
  createUser(req: Request, res: Response) {

    let newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });
    newUser.save((err: Error) => {
      if (err) res.status(400).send({ err });
      else res.status(200).json('user created');
    });

  }
}

export default new UserController();