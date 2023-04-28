import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../../config';

class Controller {

    constructor() {

    }

    createToken(id : string) {

        let token = jwt.sign({ user_id: id }, config.secret);
        return token;
    }
    validateExpressValidator(req: Request, res: Response, next: NextFunction) {

        // Finds the validation errors in this request and wraps them in an object with handy functions

        // defualt validationResult
        // const errors = validationResult(req);
        // make custom validationResult, change msg to message
        const customValidationResult = validationResult.withDefaults({
            formatter: error => {
                const message = error.msg;
                delete error.msg;
                return { message, ...error };
            },
        });
        const errors = customValidationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        next();
    }

}


export default Controller;