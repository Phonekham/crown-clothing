import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../collection-preview/collection-preview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import { CollectionsOverviewContainer } from "./collections-overview.styles";
import { selectCollections } from "../../redux/shop/shop.selector";
import "./collections-overview.scss";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToiProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToiProps)(CollectionsOverview);
