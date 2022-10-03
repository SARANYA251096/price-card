import React from "react";
// import ReactDOM from 'react-dom';
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';


function App() {
  var cardDetails=[
    {
      planName:"Free",
      price:"0",
      features: [
        {
          name:"Single User",
          isEnable:true
        },
        {
          name:"5GB Storage",
          isEnable:true
        },
        {
          name:"Unlimited Public Projects",
          isEnable:true
        },
        {
          name:"Community Access",
          isEnable:true
        },
        {
          name:"Unlimited Private Projects",
          isEnable:false
        },
        {
          name:"Dedicated Phone Support",
          isEnable:false
        },
        {
          name:"Free Subdomain",
          isEnable:false
        },
        {
          name:"Monthly Status Reports",
          isEnable:false
        },
      ],
    },
    {
      planName:"Plus",
      price:"9",
      features: [
        {
          name:"5 Users",
          isEnable:true
        },
        {
          name:"50GB Storage",
          isEnable:true
        },
        {
          name:"Unlimited Public Projects",
          isEnable:true
        },
        {
          name:"Community Access",
          isEnable:true
        },
        {
          name:"Unlimited Private Projects",
          isEnable:true
        },
        {
          name:"Dedicated Phone Support",
          isEnable:true
        },
        {
          name:"Free Subdomain",
          isEnable:true
        },
        {
          name:"Monthly Status Reports",
          isEnable:false
        },
      ],
    },
    {
      planName:"Pro",
      price:"49",
      features: [
        {
          name:"Unlimited Users",
          isEnable:true
        },
        {
          name:"150GB Storage",
          isEnable:true
        },
        {
          name:"Unlimited Public Projects",
          isEnable:true
        },
        {
          name:"Community Access",
          isEnable:true
        },
        {
          name:"Unlimited Private Projects",
          isEnable:true
        },
        {
          name:"Dedicated Phone Support",
          isEnable:true
        },
        {
          name:"Unlimited Free Subdomain",
          isEnable:true
        },
        {
          name:"Monthly Status Reports",
          isEnable:true
        },
      ],
    },
  ];
  return (
    <div className="container py-5">
      <div className="row">
        {cardDetails.map((card) => {
          return <Card card={card}></Card>

        })}
      </div>
    </div>
  );
}

export default App;
