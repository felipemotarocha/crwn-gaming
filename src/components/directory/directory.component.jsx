import React from "react";

import "./directory.styles.css";
import { DIRECTORY_DATA } from "./directory.data";

import DirectoryItem from "../directory-item/directory-item.component";

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: DIRECTORY_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="directory">
                {collections.map(({ id, ...otherProps }) => (
                    <DirectoryItem key={id} {...otherProps} />
                ))}
            </div>
        );
    }
}

export default Directory;
