import React, {Component} from 'react';
import '../../css/home-card.css';
import {NavLink} from "react-router-dom";

class HomeCard extends Component {
    render() {
        return (
            <NavLink className="nav-link" to={this.props.link}>
                <div className="frontside">
                    <div className="card">
                        <div className="card-body text-center">
                            <p>
                                <img className="img-fluid" src={this.props.img}/>
                            </p>
                            <h4 className="card-title">{this.props.title}</h4>
                            <p className="card-text">{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </NavLink>

        )
    }
}

export default HomeCard;
