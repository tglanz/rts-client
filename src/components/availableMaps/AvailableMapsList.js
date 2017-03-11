import React, { PropTypes } from 'react';

import { compose, mapProps } from 'recompose';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import AvailableMapListItem from './AvailableMapListItem';

const Query = gql`query {
  maps {
    name
  }
}`

const renderLoading = () => <p>Loading...</p>

const renderMaps = maps => maps.map((map, idx) => <div key={ idx }>
    <p>{ map.name }</p>
</div>)

const AvailableMapsList = ({ loading, maps }) => <div>{
    loading ? renderLoading() : renderMaps(maps)
}</div>

AvailableMapsList.propTypes = {
    loading: PropTypes.bool.isRequired,

    maps: PropTypes.array
}

export default compose(
    graphql(Query),
    mapProps(src => ({
        loading: src.data.loading,
        maps: src.data.maps
    }))
)(AvailableMapsList);