import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { fetchCollectionsStartSync } from "../../redux/shop/shop.action";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartSync } = this.props;
    fetchCollectionsStartSync();
  }
  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartSync: () => dispatch(fetchCollectionsStartSync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
