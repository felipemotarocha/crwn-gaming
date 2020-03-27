import React from "react";

import "./collection-preview.styles.css";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => (
    <div>
        <div className="collection-preview">
            <h1>{title}</h1>
            {items.map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;
