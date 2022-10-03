import React from "react";
// import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';



function Card(props) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {props.card.planName}
          </h5>
          <h6 class="card-price text-center">
            ${props.card.price}
            <span class="period">/month</span>
          </h6>
          <hr />
          <ul class="fa-ul">
              {props.card.features.map((item) => {
                return item.isEnable ? <li><FontAwesomeIcon icon={faCheck} />   {item.name}</li> : <li style={{color:"#a8acb1"}}><FontAwesomeIcon icon={faXmark} />   {item.name}</li>
                // return <FontAwesomeIcon icon={faCheck} />
              })}
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase ">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
