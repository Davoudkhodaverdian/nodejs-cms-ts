
import { Request, Response } from 'express';
import Controller from '../controller';
import Product, { IProduct } from '../../../models/product';
import Transform from '../../../transform';
import { Error } from 'mongoose';


class ProductController extends Controller {

  index(req: Request, res: Response) {
    Product.find({}, (error: Error, products: IProduct[]) => {
      if (error) res.status(422).send({ error });
      else if (products) res.status(200).json({

        // without using transform class for get limited data for people that they are not admin
        // products: products.map((product: IProduct) => ({
        //   title: product.title,
        //   body: product.body,
        //   price: product.price,
        // }))

        // using transform class for get limited data for people that they are not admin
        products: new Transform().transformCollection<IProduct>(products,['title','body','price'])
      });
    })

  }
  // product(req: Request, res: Response) {
  //   // Product.findById()
  //   Product.findById(req.params.id, (error: Error, product: IProduct) => {
  //     if (error) res.status(422).send({ error });
  //     else if (product) res.status(200).json({ product });
  //   })
  // }
  // createProduct(req: Request, res: Response) {

  //   let newProduct = new Product({
  //     title: req.body.title,
  //     body: req.body.body,
  //     price: req.body.price
  //   }).save((error: Error) => {
  //     if (error) res.status(422).send({ error });
  //     else res.status(200).json('product created');
  //   });

  // }
  // changeProduct(req: Request, res: Response) {
  //   Product.findByIdAndUpdate(req.params.id, { title: 'ptoduct one modified' }, (error: Error) => {
  //     if (error) res.status(422).send({ error });
  //     else res.status(200).json('title changed');
  //   })


  // }
  // removeProduct(req: Request, res: Response) {
  //   Product.findByIdAndDelete(req.params.id, (error: Error) => {
  //     if (error) res.status(422).send({ error });
  //     else res.status(200).json('The product has removed');
  //   })


  // }
}

export default new ProductController();