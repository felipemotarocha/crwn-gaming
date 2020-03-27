import React from "react";
import { withRouter } from "react-router-dom";

import "./directory-item.styles.css";

const DirectoryItem = ({ title, imgUrl, path, history, match }) => (
    <div
        className="directory-item"
        onClick={() => history.push(`${match.url}${path}`)}
    >
        <div
            className="background-image"
            style={{ backgroundImage: `url(${imgUrl})` }}
        >
            <h1>{title}</h1>
        </div>
    </div>
);

export default withRouter(DirectoryItem);
