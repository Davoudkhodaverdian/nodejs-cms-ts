
import { Request, Response } from 'express';
import Controller from '../controller';
import Transform from '../../../transform';
import { IUser } from '../../../models/user';

class UserController extends Controller {

  user(req: Request, res: Response) {

    // console.log({user:req['user']});
    return res.status(200).json({
      status: 200,
      response: {
        // using transform class for get limited data for people that they are not admin
        user: new Transform().transform<IUser>(req['user'],
          ['firstname', 'lastname', 'email', "phonenumber", "created_at", "updated_at"]
        )
      }
    });

  }

}

export default new UserController();