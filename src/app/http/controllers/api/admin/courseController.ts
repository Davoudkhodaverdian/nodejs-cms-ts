import { Error } from "mongoose";

import Controller from "../../controller";
import { Request, Response } from 'express';
import Course, { ICourse } from "../../../../models/course";

class CourseController extends Controller {

  index(req: Request, res: Response) {
    Course.find({}, (error: Error, courses: ICourse[]) => {
      if (error) res.status(422).send({ error });
      else if (courses) res.status(200).json({ courses });
    })

  }

  createCource(req: Request, res: Response) {
    
    let newCourse = new Course({
      title: req.body.title,
      body: req.body.body,
      price: req.body.price
    });
    newCourse.save((error: Error) => {
      if (error) res.status(422).send({ error });
      else res.status(200).json('course created');
    });

  }

}

export default new CourseController();