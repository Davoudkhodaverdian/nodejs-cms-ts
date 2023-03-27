import { Error } from "mongoose";

import Controller from "../../controller";
import { Request, Response } from 'express';
import Course, { ICourse } from "../../../../models/course";

class CourseController extends Controller {

  index(req: Request, res: Response) {
    Course.find({}, (err: Error, courses: ICourse[]) => {
      if (err) res.status(400).send({ err });
      else if (courses) res.status(200).json({ courses });
    })

  }

  createCource(req: Request, res: Response) {
    
    let newCourse = new Course({
      title: req.body.title,
      body: req.body.body,
      price: req.body.price
    });
    newCourse.save((err: Error) => {
      if (err) res.status(400).send({ err });
      else res.status(200).json('course created');
    });

  }

}

export default new CourseController();