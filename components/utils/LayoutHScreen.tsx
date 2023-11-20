import React from 'react'

const LayoutHScreen = ({children}) => {
  return (
    <div className='flex flex-col justify-between h-screen'>{children}</div>
  )
}

export default LayoutHScreen