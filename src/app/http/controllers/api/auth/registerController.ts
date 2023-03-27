import Controller from "./../../controller";
import { Request, Response } from 'express';

class RegisterController extends Controller {
  
  index(req: Request, res: Response) {
    
    res.json(req.body);
  }
}

export default new RegisterController();