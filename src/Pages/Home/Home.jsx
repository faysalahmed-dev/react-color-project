import React from 'react'
import {Link} from 'react-router-dom'

const Home = ({ palette}) => {
     return (
          <div>
              {palette.map(({paletteName,id}) => (
                   <div key= { id }>
                        <Link to={`/palette/${id}`} >{paletteName}</Link>
                   </div>
              ))}
          </div>
     )
}
export default Home;