import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';

class Controller {

    constructor() {

    }


    validateExpressValidator(req: Request, res: Response, next: NextFunction) {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }

}


export default Controller;