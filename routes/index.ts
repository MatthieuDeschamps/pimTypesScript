import * as express from 'express';
import * as method from '../controllers/ProductController';

export default (app) => {
  //  === api routes  ===\\
  const apiRoutes = express.Router();
  //  === append apiRoutes to app === \\  
  app.use('/api/v1', apiRoutes);



  //  === method get for all product with a limit (1000) === \\
  apiRoutes.get('/products', method.getAllProduct);
  //  === method get for get product by id in param === \\
  apiRoutes.get('/productsById/:id', method.getProductById);
  //  === method get for a count of products === \\
  apiRoutes.get('/productsCount', method.count);
  //  === method get for remove a product === \\
  apiRoutes.get('/productDelete/:id', method.deleteProduct);
  //  === method update a product === \\
  apiRoutes.put('/productUpdate/:id', method.updateProduct);
  //  === method create a product === \\
  apiRoutes.post('/productCreate', method.createProduct);
}