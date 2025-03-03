import React from 'react'
import { Fragment } from 'react'
import {createRoot} from 'react-dom/client'
import Headerwork from './headertutorial'

const root = createRoot(document.getElementById('root'))
root.render(
  <Firstwork/>
// {/* <Headerwork/> */}
)
function Firstwork (){
    return(
        <Fragment>
            <Headerwork/>
                 <Myul/>
                </Fragment>
    )
}


function Myul(){
    return(
        <>
          <ul>
                <li>lets do this together guys</li>
                <li>lets do this together guys</li>
                <li>lets do this together guys</li>
                <li>lets do this together guys</li>
                <li>lets do this together guys</li>
            </ul>
        </>
    )
}
