import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map(sushi => {
            return <Sushi sushi={sushi} eatSushi={props.eatSushi}/>
          })
        }
        <MoreButton incrementConveyor={props.incrementConveyor}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer