import React from 'react'
import YouTube from 'react-youtube'

const Content = () => {
 return (
     <div>  
         <div className='sidebar'></div>
         <div className='videoPlayer'>
             <YouTube videoId="JViCymB5m2Q" />
         </div>
        <div className='searchList'></div>
     </div>
 )
}
export default Content