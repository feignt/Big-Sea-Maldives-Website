import React from "react";
import '../styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";



function Castello(){
    const {ref:myRef, inView, entry} = useInView();

    return(
        <>
        
        <section id="castello">
        <img  className = "castello-img" src={require("../img/castello.png")}alt="castello" />
        <Grid ref={myRef} container spacing={2}>
            <Grid item xs={12} md={3}>
                <Card  className={`${"castello-card1 hidden "}${inView ? " show":""}`} sx={{ maxWidth: '100%' }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/115250--01--1555690663.jpeg"
                    title="Whole Peeled Tomato"
                />
                <CardContent>
                    <h2>Whole Peeled Tomato</h2>
                    <Typography variant="body2" color="text.secondary">
                    This product is obtained only from the unique tomatoes of our sunny lands in South of Italy, processed in the same day which they are collected to keep intact both their 
                    freshness, taste and fragrance. The ripe red colour tomatoes give it a higher yield and thicker juice, ideal for demanding chefs.
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
                <Grid item xs={12} md={3}>
                <Card className={`${"castello-card2 hidden "}${inView ? " show":""}`} sx={{ maxWidth: '100%' }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/115250--01--1555690663.jpeg"
                    title="Whole Peeled Tomato"
                />
                <CardContent>
                    <h2>Whole Peeled Tomato</h2>
                    <Typography variant="body2" color="text.secondary">
                    This product is obtained only from the unique tomatoes of our sunny lands in South of Italy, processed in the same day which they are collected to keep intact both their 
                    freshness, taste and fragrance. The ripe red colour tomatoes give it a higher yield and thicker juice, ideal for demanding chefs.
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card className={`${"castello-card3 hidden "}${inView ? " show":""}`}  sx={{ maxWidth: '100%' }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/115250--01--1555690663.jpeg"
                    title="Whole Peeled Tomato"
                />
                <CardContent>
                    <h2>Whole Peeled Tomato</h2>
                    <Typography variant="body2" color="text.secondary">
                    This product is obtained only from the unique tomatoes of our sunny lands in South of Italy, processed in the same day which they are collected to keep intact both their 
                    freshness, taste and fragrance. The ripe red colour tomatoes give it a higher yield and thicker juice, ideal for demanding chefs.
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
                <Grid item xs={12} md={3}>
                <Card className={`${"castello-card4 hidden "}${inView ? " show":""}`}  sx={{ maxWidth: '100%' }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image="https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/600-600/115250--01--1555690663.jpeg"
                    title="Whole Peeled Tomato"
                />
                <CardContent>
                    <h2>Whole Peeled Tomato</h2>
                    <Typography variant="body2" color="text.secondary">
                    This product is obtained only from the unique tomatoes of our sunny lands in South of Italy, processed in the same day which they are collected to keep intact both their 
                    freshness, taste and fragrance. The ripe red colour tomatoes give it a higher yield and thicker juice, ideal for demanding chefs.
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
        
       


        </section>
</>
    )


}
export default Castello
