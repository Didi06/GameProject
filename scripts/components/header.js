import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            
        }
    }

    render() { 
        return ( 
            <div>
                <h2 className="badge badge-info topHeader"> Final Fantasy XXV </h2>
            </div>
         )
    }
}
 
export default Header;