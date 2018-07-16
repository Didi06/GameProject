import React from 'react';

import Header from './header';
import Heroes from './heroes';
import Villains from './villains';
import Store from './store';

import Warrior from './images/heroes/warrior.png';
import Empress from './images/heroes/empress.png';
import Rogue from './images/heroes/rogue.png';
import WarriorSword from './images/abilities/spiked-dagger.png';
import ArcaneSword from './images/abilities/arcane-strike.png';
import Ragnarok from './images/abilities/ragnarok.png';
import CrystalRain from './images/abilities/crystal-rain.png';
import Lightning from './images/abilities/lightning-strike.png';
import Fire from './images/abilities/for-blaze.png';
import RogueSword from './images/abilities/silver-dagger.png';
import CuttingEdge from './images/abilities/cutting-edge.png';
import GoldenBlade from './images/abilities/golden-blade.png';

import Gargoyle from './images/monsters/gargoyle.png';
import Dragon from './images/monsters/ice-dragon.png';
import Grizzly from './images/monsters/infected-grizzly.png';

import Potion from './images/items/potion.png';
import Ether from './images/items/ether.png';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            villainIndex: 1,
            currentVillain: [],
            heroes: [
                {
                    name: "Warrior",
                    button: Warrior,
                    health: 150,
                    mana: 50,
                    gold: 10,
                    abilities: [
                        {
                            image: WarriorSword,
                            name: "Warrior's Sword",
                            damage: 15,
                            mana: 0
                        },
                        {
                            image: ArcaneSword,
                            name: "Arcane Strike",
                            damage: 25,
                            mana: 10
                        },
                        {
                            image: Ragnarok,
                            name: "Ragnarok",
                            damage: 30,
                            mana: 25
                        }
                    ]
                },
                {
                    name: "Empress",
                    button: Empress,
                    health: 120,
                    mana: 100,
                    gold: 10,
                    abilities: [
                        {
                            image: CrystalRain,
                            name: "Crystal Rain",
                            damage: 10,
                            mana: 5
                        },
                        {
                            image: Lightning,
                            name: "Lightning",
                            damage: 20,
                            mana: 10
                        },
                        {
                            image: Fire,
                            name: "Ray of Fire",
                            damage: 30,
                            mana: 20
                        }
                    ]
                },
                {
                    name: "Rogue",
                    button: Rogue,
                    health: 130,
                    mana: 70,
                    gold: 20,
                    abilities: [
                        {
                            image: RogueSword,
                            name: "Silver dagger",
                            damage: 10,
                            mana: 0
                        },
                        {
                            image: CuttingEdge,
                            name: "Cutting Edge",
                            damage: 20,
                            mana: 10
                        },
                        {
                            image: GoldenBlade,
                            name: "Golden Strike",
                            damage: 25,
                            mana: 20
                        }
                    ]
                }
            ],

            villains: [
                {
                    name: "Gargoyle",
                    image: Gargoyle,
                    health: 40,
                    strength: 15,
                    gold: 30
                },
                {
                    name: "Infected Grizzly",
                    image: Grizzly,
                    health: 90,
                    strength: 20,
                    gold: 50
                },
                {
                    name: "Ice Dragon",
                    image: Dragon,
                    health: 120,
                    strength: 25,
                    gold: 60
                }
            ],

            store: [
                {
                    name: "Potion",
                    image: Potion,
                    heal: 60,
                    cost: 30,
                    info: "Recovers 60 health points"
                },
                {
                    name: "Ether",
                    image: Ether,
                    heal: 50,
                    cost: 20,
                    info: "Recovers 50 mana points"
                }
            ]
        }
    }

    // code to choose the first hero and remove the third & second hero from the screen
    chooseFirstHero() {
        let newArray = [...this.state.heroes];
        newArray.pop()
        newArray.pop()
        this.setState({
            heroes: newArray
        })
    }

    // code to choose the second hero and remove the third & first hero from the screen
    chooseSecondHero() {
        let newArray = [...this.state.heroes];
        newArray.pop()
        newArray.shift()
        this.setState({
            heroes: newArray
        })
    }

    // code to choose the third hero and remove the second & first hero from the screen
    chooseThirdHero() {
        let newArray = [...this.state.heroes]
        newArray.shift();
        newArray.shift();
        this.setState({
            heroes: newArray
        })
    }

    // code to conditionally render the above three functions to choose our hero
    removeHero(index) {
        if (index == 0) {
            this.chooseFirstHero();
        }
        else if (index == 1) {
            this.chooseSecondHero();
        }
        else {
            this.chooseThirdHero();
        }
        console.log(index)

    }

    // code to hide the villains from the page in the beginning of the game

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    // code added to the start button to start the game & is connected to hide our villain toggleHidden function
    showvillain() {

        if (this.state.heroes.length == 1) {
            alert("The first villain is coming! Use your hero's abilities to defeat all enemies that cross your path!")

            var index = 0
            let newArray = []
            if (this.state.villains[index].health < 1) {
                index++
            }
            newArray.push(this.state.villains[index])
            this.setState({
                isHidden: true,
                currentVillain: newArray
            })
        }
        else {
            alert("You must choose your hero!")
        }
    }

    // code to check the health of our currentvillain if he is alive & if not diplay hero "You win"
    checkForWin() {
        if (this.state.heroes[0].health > 0 && this.state.currentVillain[0] == null) {
            alert("You Win!")
        }
    }

    // code to check the mana of the hero
    checkMana(index) {
        if (this.state.heroes[0].abilities[index].mana <= this.state.heroes[0].mana) {
            return true
        } else {
            return false
        }
    }

    // code for villain attacking our hero
    villainAttackHero() {
        if (this.state.currentVillain != null) {
            alert("You have been attacked by the " + this.state.currentVillain[0].name + " for " + this.state.currentVillain[0].strength + " damage!")

            var newHeroHealth = this.state.heroes[0].health -= this.state.currentVillain[0].strength
            var newArray = [...this.state.heroes]

            // code to show that our hero has diead
            if (this.state.heroes[0].health <= 0) {
                newArray.shift()
                alert("Your hero has died")
            }

            // code to update our hero's health
            this.setState(prevState => ({
                return: {
                    heroes: {
                        ...prevState.heroes,
                        health: newHeroHealth
                    }
                }
            }))
        }
    }

    // code for hero attacking the villain
    heroAttackVillain(index) {

        if (this.state.currentVillain[0] != null) {

            // code to alert the hero he doesn't have enough mana to attack with a specific ability
            if (this.checkMana(index) == false) {
                alert("You don't have enough mana")
                return;
            }

            console.log(index)
            console.log(this.state.heroes[0].abilities[index].damage)

            var newHealth = this.state.currentVillain[0].health -= this.state.heroes[0].abilities[index].damage
            var newMana = this.state.heroes[0].mana -= this.state.heroes[0].abilities[index].mana
            var newArray = [...this.state.currentVillain]

            if (this.state.currentVillain[0].health <= 0) {

                // this is grabbing the next index value from original array after checking if current villain is dead
                let index = this.state.villainIndex
                index++
                this.setState({
                    villainIndex: index
                })
                console.log(index)
                newArray.shift()
                newArray.push(this.state.villains[this.state.villainIndex])
                this.setState({ currentVillain: newArray })

                var newGold = this.state.heroes[0].gold += this.state.currentVillain[0].gold
            }

            // updates stats for villain after hero attacks
            this.setState(prevState => ({
                return: {
                    currentVillain: {
                        ...prevState.currentVillain,
                        health: newHealth
                    }
                }
            }))

            // updates gold value for hero after killing villain
            this.setState(prevState => ({
                return: {
                    heroes: {
                        ...prevState.heroes,
                        gold: newGold
                    }
                }
            }))

            // alert hero he attacked villain with a specific ability
            alert("You attacked " + this.state.currentVillain[0].name + " using " + this.state.heroes[0].abilities[index].name + " for " + this.state.heroes[0].abilities[index].damage + " damage!")
            setTimeout(() => {
                this.villainAttackHero();

            }, 700)

        }
        if (this.state.currentVillain[0] == null) { alert('you win'); }
    }

    // code to buy a potion to increase hero's health
    buyPotion() {
        // code to let the hero know he doesn't have enough gold to buy a potion
        if (this.state.heroes[0].gold < this.state.store[0].cost) {
            alert("You don't have enough gold!")
        }
        // code to allows the hero to buy potion & heal him
        else {
            var newGold = this.state.heroes[0].gold - this.state.store[0].cost
            var healWithPotion = this.state.heroes[0].health + this.state.store[0].heal
            this.setState(prevState => ({                                       // code to upodates the hero health after buying potion
                heroes: [{
                    ...prevState.heroes[0],
                    health: healWithPotion,
                    gold: newGold
                }]
            }))
            alert("You recovered 60 health points!")
        }
    }

    // code to buy ether 
    buyEther() {
         // code to let the hero know he doesn't have enough gold to buy a potion
        if (this.state.heroes[0].gold < this.state.store[1].cost) {
            alert("You don't have enough gold!")
        }
        else {
            var newGold = this.state.heroes[0].gold - this.state.store[1].cost
            var healWithEther = this.state.heroes[0].mana + this.state.store[1].heal
            this.setState(prevState => ({           // code to updates the hero mana when he buys ether                        
                heroes: [{
                    ...prevState.heroes[0],
                    mana: healWithEther,
                    gold: newGold
                }]
            }))
            alert("You recovered 50 mana points!")
        }
    }

    render() {
        return (
            <div>
                <Header />
                <button onClick={this.showvillain.bind(this)}> Start </button>  

                <Heroes toggleHidden={this.toggleHidden.bind(this)}
                    removeHero={this.removeHero.bind(this)}
                    heroAttackVillain={this.heroAttackVillain.bind(this)}
                    villainAttackHero={this.villainAttackHero.bind(this)}
                    heroes={this.state.heroes} />
                {this.state.isHidden && this.state.currentVillain[0] != null && <Villains
                    villains={this.state.currentVillain} />}
                <h3 id="shopHeader"> <span className="badge badge-primary"> Shop </span> </h3>
                <Store store={this.state.store}
                    buyPotion={this.buyPotion.bind(this)}
                    buyEther={this.buyEther.bind(this)} />}

            </div>
        )
    }
}

export default Container;
