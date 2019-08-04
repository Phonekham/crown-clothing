import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchCollectionsStartSync } from "../../redux/shop/shop.action";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview-container";
import CollectionPageContainer from "../collection/collection-container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartSync } = this.props;
    fetchCollectionsStartSync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartSync: () => dispatch(fetchCollectionsStartSync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
