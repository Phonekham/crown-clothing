import React from "react";
import CollectionItem from "../../components/collection-item/collection-item";
import "./collection.scss";

const CollectionPage = ({ match }) => {
  console.log(match.params.collectionId);

  return (
    <div className="categcollection-pageory">
      <h2>Collection Page</h2>
    </div>
  );
};

export default CollectionPage;
