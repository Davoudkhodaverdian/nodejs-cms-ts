import { Error } from "mongoose";
import Product, { IProduct } from "../../../../models/product";
import Controller from "./../../controller";
import { Request, Response } from 'express';

class ProductController extends Controller {

  index(req: Request, res: Response) {
    Product.find({}, (error: Error, products: IProduct[]) => {
      if (error) res.status(422).send({ error });
      else if (products) res.status(200).json({ products });
    })

  }
  product(req: Request, res: Response) {
   
    Product.findById(req.params.id, (error: Error, product: IProduct) => {
      if (error) res.status(422).send({ error });
      else if (product) res.status(200).json({ product });
    })
  }
  createProduct(req: Request, res: Response) {
    
    let newProduct = new Product({
      title: req.body.title,
      body: req.body.body,
      price: req.body.price
    });
    newProduct.save((error: Error) => {
      if (error) res.status(422).send({ error });
      else res.status(200).json('product created');
    });

  }
  changeProduct(req: Request, res: Response) {
    Product.findByIdAndUpdate(req.params.id,{title: req.body.title},(error: Error) => {
      if (error) res.status(422).send({ error });
      else res.status(200).json('title changed');
    })
   

  }
  removeProduct(req: Request, res: Response) {
    Product.findByIdAndDelete(req.params.id,(error: Error) => {
      if (error) res.status(422).send({ error });
      else res.status(200).json('The product has removed');
    })
   

  }
}

export default new ProductController();