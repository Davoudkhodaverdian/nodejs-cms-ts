import jwt, { JwtPayload, VerifyErrors } from "jsonwebtoken";
import { config } from "../../config";
import User, { IUser } from "../../models/user";
import { Error } from "mongoose";
import { NextFunction, Request, Response } from 'express';

const verifyAuthToken = (req : Request, res : Response, next : NextFunction) => {

    let token = req.cookies?.['shop-token'] !== 'undefined' && req.cookies?.['shop-token'] ||
        req.headers?.authorization !== 'undefined' && req.headers?.authorization ||
        req.body?.token !== 'undefined' && req.body?.token || req.query?.token !== 'undefined' && req.query?.token ||
        req.headers['x-access-token'] !== 'undefined' && req.headers['x-access-token'];

    if (!token) {
        return res.status(403).json({ status: 'fail', message: 'unauthorized' })
    }


    jwt.verify(token, config.secret, (error : VerifyErrors, decode : JwtPayload) => {

        if (error) {
            return res.status(422).json({ error: { message: "filed to authenticate token" } });
        }
        
        User.findById(decode.user_id, (error: Error, user : IUser) => {
            if (error) return res.status(422).json({error});
            if (user) {
                req['user'] = user;
                next();
            } else {
                return res.status(422).json({ error: { message: "user not found" } });
            }
        })

    })
}

export default verifyAuthToken;