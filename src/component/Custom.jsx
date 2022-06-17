import React from "react";

function Custom(props) {

  return (
    <div>
      <h1 className="">
      Custom Component
    </h1>
      <div id="content">
        {
            props.data.map(function(item,i){
                return <div key={i} data-id={item.id}>
                        <div><span>Name: </span><span>{item.name}</span></div>
                        <div><span>Age: </span><span>{item.age}</span></div>
                        <div><span>Address: </span><span>{item.address}</span></div>
                </div>
            })
        }

        {/* <div>
          <span>Name: </span>
          <span id="name"></span>
        </div>
        <div>
          <span>Age: </span>
          <span id="age"></span>
        </div>
        <div>
          <span>Address:</span>
          <span id="address"></span>
        </div> */}
      </div>
    </div>
  );
}

export default Custom;





