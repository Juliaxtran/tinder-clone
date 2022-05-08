import TinderCard from "react-tinder-card"
import { useState } from 'react'
import ChatContainer from "../components/ChatContainer"



// Intial Code for Tinder Card

// npm i react-tinder-card

// {characters.map((character) =>
//   <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
//     <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
//       <h3>{character.name}</h3>
//     </div>
//   </TinderCard>
// )}





const Dashboard = (props) => {

  const db = [
    {
      name: 'Richard Hendricks',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    },
    {
      name: 'Erlich Bachman',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    },
    {
      name: 'Monica Hall',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    },
    {
      name: 'Jared Dunn',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https://i.imgur.com/oPj4A8u.jpeg'
    }
  ]



  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }


  return (
    <>
      <div className='dashboard'>
        <ChatContainer />
        <div className='swipe-container'>
          <div className='card-container'>

          {/* Tinder Card with Swipe option */}

            {characters.map((character) =>
              <TinderCard
              className='swipe'
              key={character.name}
               onSwipe={(dir) => swiped(dir, character.name)}
               onCardLeftScreen={() => outOfFrame(character.name)}>
                <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>)}

             {/* Swipe Info */}
              <div className='swipe-info'>
              {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
              </div>



          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard