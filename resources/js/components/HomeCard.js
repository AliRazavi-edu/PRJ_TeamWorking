import React, {Component} from 'react';
import '../../css/home-card.css';
import {Link} from "react-router-dom";

class HomeCard extends Component {
    render() {
        return (
            <Link to={this.props.link}>
                <div className="frontside">
                    <div className="card">
                        <div className="card-body text-center">
                            <p>
                                <img className="img-fluid" src={this.props.img}/>
                            </p>
                            <h4 className="card-title">{this.props.title}</h4>
                            <p className="card-text">رشته: {this.props.studyField}</p>
                            <p className="card-text">استاد: {this.props.teacher}</p>
                            <p className="card-text">دوره: {this.props.semester}</p>

                        </div>
                    </div>
                </div>
            </Link>

        )
    }
}

export default HomeCard;
