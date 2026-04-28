import React from 'react'
import { Box, BasePropertyProps } from 'admin-bro'

const Edit: React.FC<BasePropertyProps> = (props) => {
   const { record } = props
   const srcImg = record?.params['resumeLocation']

   return (
      <Box>
         {srcImg ? (
            <a href={`/file/${srcImg}`} target="_blank">Resume</a>
         ) : 'no reesume'}
      </Box>
   )
}

export default Edit