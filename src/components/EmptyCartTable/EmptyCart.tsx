import React from 'react'
import Sad from './sad.svg'
import { Image } from 'semantic-ui-react'

const EmptyCart = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Image src={Sad} fluid size="tiny"/>
            <h3>No item in Cart</h3>
        </div>
    )
}

export default EmptyCart
