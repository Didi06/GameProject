import React from 'react';

class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.store.map((item, index) => {
                        return (
                            <div className="col-6 storeDiv" key={index}>
                                <p className="nameCenter marginTopAndBottom" id="itemName"> <span className="badge badge-pill badge-secondary"> {item.name} </span> </p>
                                {
                                    item.name === "Potion"
                                        ? <button className="itemIcon"><img onClick={() => this.props.buyPotion()} src={item.image} /></button>
                                        : <button className="itemIcon"><img onClick={() => this.props.buyEther()} src={item.image} /></button>
                                }
                                <p className="itemInfo"> <span className="badge badge-info labelSize"> {item.info} </span> </p>
                                <p className="storeCenter"> <span className="badge badge-warning labelSize"> Gold: </span> <span className="textLarge"> {item.cost} </span> </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Store;