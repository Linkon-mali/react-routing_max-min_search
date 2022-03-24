import React from 'react'
import withLayout from '../hocs/withLayout';

const Home = () => {
    return (
        <>
            <h2>Welcome to the homepage!</h2>
        </>
      );
}

export default withLayout(Home);