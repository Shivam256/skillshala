import React from 'react'
import {Button} from '@mui/material';

const CustomButton = ({children,...props}) => {
  return (
    <Button
    className="w-fit py-2 px-10 bg-blue-500 hover:bg-blue-500 font-bold text-xl text-white hover:text-white"
    type="submit"
    {...props}
  >
    {children}
  </Button>
  )
}

export default CustomButton