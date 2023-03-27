import Controller from "../controller";
import { Request, Response } from 'express';

class HomeController extends Controller {

  index(req: Request, res: Response) {
    
    res.send(`Api page`);
  }
}

export default new HomeController();