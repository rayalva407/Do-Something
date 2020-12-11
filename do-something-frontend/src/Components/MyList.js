import React from 'react';
import ListHeader from './ListHeader';

import {connect} from 'react-redux'

import SearchForm from './SearchForm'


const MyList = (props) => {

return (
    <>
      <ListHeader numItems={props.list.length}/>
      <SearchForm listProp={props.list}/>
    </>
  );
};

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

export default connect(mapStateToProps)(MyList);