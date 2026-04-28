import React from 'react'
import { Box, BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
   const { record } = props
   const srcImg = record?.params.videoLocationEng

   return (
      <Box>
         {srcImg ? 
             <video width="100px" src={srcImg} />
          : 'no video'}
      </Box>
   )
}

export default Edit