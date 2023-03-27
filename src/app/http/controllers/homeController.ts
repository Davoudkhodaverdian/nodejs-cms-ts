import Controller from "./controller";
import { Request, Response } from 'express';

class HomeController extends Controller {

  index(req: Request, res: Response) {
    
    res.send(`Home page ${process.env.NODE_ENV} environment`);
  }
}

export default new HomeController();