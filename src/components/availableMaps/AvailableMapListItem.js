import React, { PropTypes } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const AvailableMapListItem = ({ name }) => <div>
    <p>{ name }</p>
</div>

AvailableMapListItem.propTypes = {
    name: PropTypes.string.isRequired
}

export default AvailableMapListItem;