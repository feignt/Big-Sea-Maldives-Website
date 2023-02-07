import React from "react";
import '../styles.css';
import QuiltedImageList from "./QuiltedImageList";
import { Paper } from "@mui/material";
import { useInView } from "react-intersection-observer";

function Seafood(){
    const {ref:seafoodRef, inView, entry} = useInView();
    return(
        <>
        
        <div id="seafood" className="spacer wave-layer">
        
        <div className="seafood-title">
            <h2 style={{textAlign:'center', margin:0, paddingTop:'1rem'}}>Seafood</h2>
            <hr style={{width:'60%', background:'black'}} />
        <p style={{textAlign:'center', paddingBottom:'1rem'}}>Freshly Caught by experienced fisherman, processed immediately to maintain the freshness.</p>
            
        </div>
    
        <Paper ref={seafoodRef} className={`${"hidden-sf "}${inView ? " show-sf":""}`} elevation={4} sx={{ mx:'auto', width:'450px'}}>
        <QuiltedImageList/>
        </Paper>
        
        </div>
        </>
    );

}
export default Seafood;
