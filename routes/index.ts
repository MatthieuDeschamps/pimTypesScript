import * as express from 'express';
import {  getAllProduct, count } from '../controllers/ProductController';

export default (app) => {
  //  === api routes  ===\\
  const apiRoutes = express.Router();   
  //  === append apiRoutes to app === \\  
  app.use('/api/v1', apiRoutes);
  //  === method get  === \\
  apiRoutes.get('/products', getAllProduct);
  apiRoutes.get('/productsV3', count);
  /*
  apiRoutes.get('/productsV1', getAllProductV2);
  apiRoutes.get('/productsV2', getProduct);
  
*/
};