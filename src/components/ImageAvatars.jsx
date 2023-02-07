import React from "react";
import Avatar from '@mui/material/Avatar'


function ImageAvatars(){
    const img = require("../img/logo.png");
    return (
        <Avatar
            sx={{display:{xs:'none', md:'flex'}}}
            src={img}
        />
    )
}

export default ImageAvatars;