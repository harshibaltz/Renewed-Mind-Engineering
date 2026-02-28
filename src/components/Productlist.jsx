import React from 'react';
function Productlist(){
    const Product = [
  { id : 1, name : "Hamburger"},
  {id: 2,name : "Planet"},
  {id:3, name: "Pizza"},
  {id :4, name : "Diapers"},
  { id: 5, name: "groundnut oil"}
    ];
return (
  <div>
    <h2>Product List</h2>
    <ul>
      {Product.map(product =>(
      //Always use a unique "key"  prop when rendering lists
      <li key ={product.id}>
        {product.name}
      </li>
      ))}
    </ul>
  </div>
);
}
 export default Productlist;