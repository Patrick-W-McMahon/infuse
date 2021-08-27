import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { fetchName, fetchEnv } from './action';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchName, name, fetchEnv, env } = this.props;
    if(name === ''){
      fetchName();
    }
    if(!env){
      fetchEnv();
    }
  }

  displayEnv(env) {
    if(!env || env === undefined || env === null) {
      return <div>Loading Environment Data...</div>;
    }
    return Object.keys(env).map((key, index) => (<div key={index}><b>{key}:</b> {env[key]}</div>));
  }

  render() {
    const { loading, name, env } = this.props;
    return (
      <Fragment>
        {!loading ? <h1>Hello {name}</h1> : <h1>Loading.. please wait!</h1>}
        <p>welcome to Infuse a flexable React Starter Kit</p>
        <div className="box scroll">
          <header>System Environment</header>
          <div className="content">{this.displayEnv(env)}</div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { loading, name, env } = state.Home;
  return { loading, name, env };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchName: () => dispatch(fetchName()),
    fetchEnv: () => dispatch(fetchEnv())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);