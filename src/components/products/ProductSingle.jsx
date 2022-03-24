import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductData } from '../../data/productData';
import withLayout from '../../hocs/withLayout';

const ProductSingle = () => {

  const {id} = useParams();
  console.log(id);

  const [product, setProduct] = useState(null);
  useEffect(() => {
    const filterd = getProductData().filter(product => product.id == id)
    if(filterd.length){
      setProduct(filterd[0]);
    }
  }, []);

  return (
    <div>
      <h2>Product Details</h2>
      {
        product !== null &&
        <div style={{textAlign: 'center'}}>
          <p>
            <img src={product.image} style={{width: 'auto', height: '300px'}} />
          </p>
          <h3>{product.title}</h3>
          <h3 style={{color: 'red'}}>{product.price}BDT</h3>
        </div>
      }
    </div>
  )
}

export default withLayout(ProductSingle);