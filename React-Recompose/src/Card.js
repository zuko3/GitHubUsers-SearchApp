import React from "react";
import  "./Card.css";
import {withState,withHandlers, compose} from "recompose"

const Card = ({ opened,handleClick, name, picture, description }) => (
    <div className="card">
        <div onClick={handleClick}>{name}</div>
        {opened ? <div>
            <img src={picture} alt={name} className="avtar" />
            <p>{description}</p>
        </div>
            : null}
    </div>
)

const enhance = compose(
    withState('opened', 'setCardOpen', false),
    withHandlers({
        handleClick: props => event => {
            props.setCardOpen(!props.opened)
        }
    })

)

export default enhance(Card)