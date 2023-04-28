import mongoose, { Error } from "mongoose";

import Controller from "../../controller";
import { Request, Response } from 'express';
import Episode, { IEpisode } from "../../../../models/episode";
import Course, { ICourse } from "../../../../models/course";


class EpisodeController extends Controller {

  index(req: Request, res: Response) {
    Episode.find({}, (error: Error, episodes: IEpisode[]) => {
      if (error) res.status(422).send({ error });
      else if (episodes) res.status(200).json({ episodes });
    })

  }

  createEpisode(req: Request, res: Response) {

    Course.findById(req.body.course_id, (error: Error, course: ICourse) => {
      if (error) res.status(422).send({ error });
      else if (course) {
        
        let newEpisode = new Episode({
          course: course._id, // or req.body.course_id
          title: req.body.title,
          body: req.body.body,
          videoUrl: req.body.videoUrl,
          number: req.body.number,
        });
        newEpisode.save((error) => {
          if (error) res.status(422).send({ error });
          else {
            course.episodes.push(newEpisode._id);
            course.save();
            res.status(200).json('episode of the course created');
          }
        });


      }
    })

  }

  episode(req: Request, res: Response) {
    // populate method gives us whole course data not just id
    Episode.findById(req.params.id).populate('course').exec((error, episode) => {

      if (error) res.status(422).send({ error });
      else if (episode) {
        res.status(200).json(episode);
      }
    })

  }
}

export default new EpisodeController();