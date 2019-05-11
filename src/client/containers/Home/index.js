import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { fetchName } from './action';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchName, name } = this.props;
    if(name === ''){
      fetchName();
    }
  }

  render() {
    const { loading, name } = this.props;
    return (
      <Fragment>
        {!loading ? <h1>Hello {name}</h1> : <h1>Loading.. please wait!</h1>}
        <p>welcome to Infuse a flexable React Starter Kit</p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { loading, name } = state.Home;
  return { loading, name };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchName: () => dispatch(fetchName())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);