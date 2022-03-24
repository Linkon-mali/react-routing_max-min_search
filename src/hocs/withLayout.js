import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

const withLayout = (PageComponent) => {
  return function withPage(){
        return (
            <div>
                <Navbar />
                <div className='container'>
                    <PageComponent />
                </div>
                <Footer />
            </div>
        )
    }
}

export default withLayout