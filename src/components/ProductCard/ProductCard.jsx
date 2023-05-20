import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Box, Rating, Stack} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProductCard = ({goods}) => {

    const [value, setValue] = React.useState(2);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 160 }}
                image={goods.img[0]}
                title="green iguana"
            />
            <CardContent>
                <Box
                    sx={{
                        '& > legend': { mt: 2 },
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}
                >
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <Typography variant="p" gutterBottom sx={{fontSize:"12px"}}>
                        {goods.quantity > 0 ? "Є в наявності" : "Товар відсутній"}
                    </Typography>
                    {/*<Typography variant="p" gutterBottom>*/}
                    {/*    {goods.article}*/}
                    {/*</Typography>*/}
                </Box>
                <Typography gutterBottom variant="h5" component="div">
                    {goods.name}
                </Typography>
                <Stack spacing={2}>
                    <Typography variant="h5" gutterBottom sx={{fontSize:"12px"}} >
                        Виробник: {goods.instruction.manufacturer.value}
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{fontSize:"12px"}}>
                        Діюча речовина: {goods.instruction.activeSubstance.value}
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{fontSize:"12px"}}>
                        Термін придатності: {goods.instruction.bestBeforeDate.value}
                    </Typography>
                </Stack>
            </CardContent>
            <Box spacing={2} sx={{display:"flex", justifyContent:"space-around", mb:1}}>
                <Typography variant="h5" gutterBottom>
                    {goods.price} UAH
                </Typography>
                <IconButton  sx={{backgroundColor:"green", borderRadius:"50%"}}>
                    <ShoppingCartOutlinedIcon/>
                </IconButton>
            </Box>
        </Card>
    );
}


export default ProductCard;