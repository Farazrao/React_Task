import React from 'react'
import Layout from '../components/Layout/Layout'

import {MenuList} from '../data/data'



const Menu = () => {
  return (
<Layout>
<div className="container">
      <div className="row justify-content-center">
        {MenuList.map((value) => (
          <div key={value.id} className="col-md-4 col-sm-6 card my-3 border-0">
            <div className="card-img-top text-center">
              <img src={value.image} alt="" className="w-75" />
            </div>
            <div className="card-body">
              <div className="card-title fw-bold fs-4">
                {value.title} 
              </div>
              <div className="card-tex">{value.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
</Layout>
    
  );
};

export default Menu;

