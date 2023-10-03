import React from 'react'


const FiltterButton = ({menuItems, filtterItems,setItems,Data}) => {
  return (
    <div className='d-flex justify-content-center md-2'>
        {menuItems.map((value)=>(
            <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
            onClick={()=> filtterItems(value)}
            >
                
                {value}
            </button>
        ))}
        <button className='btn-dark text-white p-1 px-2 mx-5 btn fw-bold'
        onClick={()=> setItems(Data)}
        >
                All
            </button>
      
    </div>
  );
};

export default FiltterButton
