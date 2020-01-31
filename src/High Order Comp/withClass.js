import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (  //spread {...} vytiahne vsetko co je vo vnutri props
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};





export default withClass;