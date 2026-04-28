import React from 'react'
import { Box, BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
   const { record } = props
   const images = ["jpg", "gif", "png","jpeg","jfif"]
   const videos = ["mp4", "3gp", "ogg"]
   const srcImg = record?.params['photoLocation']
   const extension = srcImg?.split('.').pop()
   // console.log(srcImg + " " + extension)

   return (
      <Box>
         {srcImg ? (
            images.includes(extension) && <img src={srcImg} width="100px" /> ||
            videos.includes(extension) && <video width="100px" src={srcImg} />
         ) : 'no image'}
      </Box>
   )
}

export default Edit