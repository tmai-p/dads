import React from 'react'
import img_front_door from '../front-door.jpg'
import img_dads_logo from '../dads_logo.jpg'

function Footer() {
  return (
    <div className="bground">
      <center>
        <div className="float-container">
          <div className="float-child-1">
            <img
              src={img_front_door}
              alt="Front-door"
              width={120}
              height={90}
            />
          </div>
          <div className="float-child-2">
            <img 
              src={img_dads_logo}
              alt="DAD'S Logo"
              width={80}
              height={25}
            />
            <p>
              Monday-Friday: 9am - 4pm <br />
              📞 301-937-0222
            </p>
          </div>
          <p className="footer-note">
            © Dadsappliance 2025. All Rights Reserved.
          </p>
        </div>
      </center>
    </div>

  )
}

export default Footer
