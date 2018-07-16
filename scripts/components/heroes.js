import React from 'react';

class Heroes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.heroes.map((hero, index) => { 
                        return (
                            <div className="col-4 heroDiv" id={hero.name} key={index} >
                                <p className="nameCenter marginTopAndBottom" id="heroName"> <span className="badge badge-pill badge-light"> {hero.name} </span> </p>
                                <button onClick={() => this.props.removeHero(index)} className="imageCenter"><img src={hero.button} className="imageSize" /></button>
                                <div className="statsDiv">
                                    <p className="heroStats"> <span className="badge badge-success labelSize"> Health: </span> <span className="textLarge"> {hero.health} </span> </p>
                                    <p className="heroStats"> <span className="badge badge-primary labelSize"> Mana: </span> <span className="textLarge"> {hero.mana} </span> </p>
                                    <p className="heroStats"> <span className="badge badge-warning labelSize"> Gold: </span> <span className="textLarge"> {hero.gold} </span> </p>
                                </div>
                                {hero.abilities.map((ability, index) => { //code for our hero abilities 
                                    return (
                                        <div className="abilitiesDiv" key={index}>
                                            <img onClick={() => this.props.heroAttackVillain(index)} className="abilities" src={ability.image} key={index} />
                                            <p className="abilityName"> <span className="badge badge-danger labelSize"> {ability.name} </span> </p>
                                            <p className="abilityInfo"> <span className="badge badge-info labelSize"> Damage: </span> <span className="textLarge"> {ability.damage} </span> <span className="badge badge-secondary labelSize"> Mana cost: </span> <span className="textLarge"> {ability.mana} </span> </p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Heroes;