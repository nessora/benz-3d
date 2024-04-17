import React from 'react'
import { useCustomization, carColors } from '../contexts/Customization'

const Configurator = () => {

  const { carColor, setCarColor } = useCustomization();
  const handleColorClick = (color) => {
    setCarColor(color);
    console.log(color)
  };
  return (
    <div className='config'>
      <div className="configurator-section">
        <div className="configurator-section__title">
          Car Color
        </div>
        <div className='configurator-section__values'>
          {
            carColors.map((color, index) => (
              <div key={index}
                className={`item ${color.color == carColor.color ? 'item--active' : ""}`}
                onClick={() => handleColorClick(color)}
              >
                <div className='item__dot' style={{backgroundColor : color.color}}>

                </div>

              </div>
            ))
          }
        </div>
      </div>


    </div>
  )
}

export default Configurator