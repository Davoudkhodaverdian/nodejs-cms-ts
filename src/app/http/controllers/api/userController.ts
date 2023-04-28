
import { Request, Response } from 'express';
import Controller from '../controller';
import Transform from '../../../transform';
import { IUser } from '../../../models/user';

class UserController extends Controller {

  user(req: Request, res: Response) {

      return res.status(200).json({

        // using transform class for get limited data for people that they are not admin
        user: new Transform().transform<IUser>(req['user'], ['firstName', 'lastName', 'email'])
      });

  }

}

export default new UserController();