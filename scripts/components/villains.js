import React from 'react';

class Villains extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.villains.length > 0 &&
                        this.props.villains.map((villains, index) => {
                            return (
                                <div className="col-4 villainDiv" key={index}>
                                    <p className="nameCenter marginTopAndBottom" id="villainName"> <span className="badge badge-pill badge-dark"> {villains.name} </span> </p>
                                    <button className="monsterIcon"><img className="monsterIconSize" src={villains.image} /></button>
                                    <div className="villainStatsDiv">
                                        <p className="marginTopAndBottom"> <span className="badge badge-success labelSize"> Health: </span> <span className="textLarge"> {villains.health} </span> </p>
                                        <p className="marginTopAndBottom"> <span className="badge badge-danger labelSize"> Strength: </span> <span className="textLarge"> {villains.strength} </span> </p>
                                        <p className="marginTopAndBottom"> <span className="badge badge-warning labelSize"> Gold: </span> <span className="textLarge"> {villains.gold} </span> </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Villains;