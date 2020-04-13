import React from 'react'
import { Grid, Card, Image, Reveal, Placeholder, Transition } from 'semantic-ui-react'

class ChampionCard extends React.Component {
  state={ showInfo: false }

  transition = () => {
    this.setState({
      showInfo: true
    })
  }



  render() {
    // console.log(this.props.champion.roles.shift().pop().split('", "'))
    console.log(this.props.champion.info.attack)
    return(
      <Card className='champion-card' style={{backgroundColor: 'black'}} color='teal' onMouseOver={this.transition}>


        <Card.Content style={{height: 'auto', width: 'auto'}}>
          {/* <Transition className='top' visible={this.state.showInfo} animation='scale' duration={500} style={{position: 'absolute', top: 0}}>
            <h2>hello</h2>
          </Transition> */}


            
          <div className='role-icons'>
            {/* {this.props.champion.roles.map(role => <Image size='mini' src={`${role.toLowerCase()}.jpeg`} />)} */}
            {/* why is props coming back as string and not array? need to fix and map over roles instead of the following garbage */}
            {this.props.champion.roles.includes('Fighter') ? <div><Image size='medium' src={'./images/role-icons/fighter.jpeg'} /> <h3 style={{position:'relative', top:'-40px'}}>FIGHTER</h3></div> : null}
            {this.props.champion.roles.includes('Assassin') ? <div><Image size='medium' src={'./images/role-icons/assassin.jpeg'} /> <h3 style={{position:'relative', top:'-40px'}}>ASSASSIN</h3></div> : null}
          </div>
          <Image size='medium' className='profile-pic' src={this.props.champion.icon_image}/>
        </Card.Content>




        {/* <Reveal instant animated='move up'>

          <Reveal.Content visible style={{height: '300px', width: '300px', position: 'absolute'}}>
            <Card.Content>
              <Image size='medium' src={this.props.champion.icon_image} />
            </Card.Content>
          </Reveal.Content>
          
          <Reveal.Content hidden style={{height: '300px', width: '300px', position: 'absolute'}}>
            <Card.Content>
            <Transition visible={this.state.showInfo} animation='scale' duration={500} style={{position: 'absolute', top: 0}}>
                  <h2>hello</h2>
                </Transition>
              <Image size='medium' src={this.props.champion.icon_image} style={{position: 'absolute', top: 0, zIndex: '-1'}}/> */}




              {/* <Placeholder>
                <Placeholder.Image size='large' square />
              </Placeholder> */}
              {/* <Image src='https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' size='large' square /> */}




            {/* </Card.Content>
          </Reveal.Content>
        </Reveal> */}
        
        <Card.Content style={{}}>
          <h3 className='champion-name'>{`${this.props.champion.name}, ${this.props.champion.title}`}</h3>
        </Card.Content>
      </Card>
    )
  }

}

export default ChampionCard