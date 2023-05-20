import React, {useState} from 'react';
import {Container, Typography, Tabs, Stack, Button, Box, Grid, List, Rating,  ListItem, ListItemText, ListItemButton, ImageList, ImageListItem} from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductCard from './components/ProductCard';
import {goods} from "./utils/goods.js";

const App = ({goods}) => {


    const [quantity, setQuantity] = useState(1);
    const [value, setValue] = React.useState(2);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

//FOR TABS

    const [valueTabs, setValueTabs] = React.useState('1');

    const handleChangeTab = (event, newValue) => {
        setValueTabs(newValue);
    };




    return (

        <Container sx={{ width:'1500px'}}>
            <Grid container spacing={2}>
                <Grid item lg={12}>
                    <List  sx={{ display: 'flex'}}>
                        <ListItemButton sx={{ flex: '0 0 auto', paddingLeft: '5px', paddingRight: 0 }}>
                            <HomeOutlinedIcon sx={{ paddingRight: '12px' }}/>
                            <ListItemText primaryTypographyProps={{ style: { fontSize: '14px',  paddingRight: '12px' } }} primary="Головна /" />
                        </ListItemButton>
                        <ListItemButton sx={{ flex: '0 0 auto', paddingLeft: '5px', paddingRight: 0 }}>
                            <ListItemText primaryTypographyProps={{ style: { fontSize: '14px',  paddingRight: '12px' } }} primary={`${goods.mainCategory} /`} />
                        </ListItemButton>
                        <ListItemButton sx={{ flex: '0 0 auto', paddingLeft: '5px', paddingRight: 0 }}>
                            <ListItemText sx={{ paddingRight: 0 }} primaryTypographyProps={{ style: { fontSize: '14px',  paddingRight: '12px' } }} primary={`${goods.subCategory}`} />
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid item lg={12}>
                    <Typography variant="h4" sx={{ fontSize: '36px', fontWeight:700}} gutterBottom>
                        {goods.name}
                    </Typography>
                </Grid>
                <Grid item lg={12}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={valueTabs} >
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: "#F7FAFB"}}>
                                <TabList onChange={handleChangeTab} aria-label="lab API tabs example" sx={{ display: "flex", justifyContent: "center", width:"100%"}}>
                                    <Tab label="Все про товар" value="1" />
                                    <Tab label="Інструкція" value="2" />
                                    <Tab label="Аналоги" value="3" />
                                    <Tab label="Відгуки" value="4" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <Grid container spacing={2}  sx={{ }}>
                                    <Grid item lg={5} >
                                        <Grid container spacing={2} sx={{ }}>
                                            <Grid item lg={4} >
                                                <ImageList cols={1}>
                                                    <ImageListItem>
                                                        <img src={goods.img[1]} alt="Image 1" />
                                                    </ImageListItem>
                                                    <ImageListItem>
                                                        <img src={goods.img[2]} alt="Image 2" />
                                                    </ImageListItem>
                                                    <ImageListItem>
                                                        <img src={goods.img[3]} alt="Image 3" />
                                                    </ImageListItem>
                                                </ImageList>
                                            </Grid>
                                            <Grid item lg={8} >
                                                <ImageList rowHeight="100%" cols={1}>
                                                    <ImageListItem>
                                                        <img src={goods.img[0]} alt="Image 4" />
                                                    </ImageListItem>
                                                </ImageList>
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid item lg={7}>
                                        <Grid container spacing={2}>
                                            <Grid item lg={7}>
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
                                                    <Typography variant="p" gutterBottom>
                                                        {goods.quantity > 0 ? "Є в наявності" : "Товар відсутній"}
                                                    </Typography>
                                                    <Typography variant="p" gutterBottom>
                                                        {goods.article}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ width: '100%' }}>
                                                    <Typography variant="h4" gutterBottom>
                                                        Характеристики
                                                    </Typography>
                                                    <Stack spacing={2}>
                                                        <Typography variant="h5" gutterBottom>
                                                            Виробник: {goods.instruction.manufacturer.value}
                                                        </Typography>
                                                        <Typography variant="h5" gutterBottom>
                                                            Діюча речовина: {goods.instruction.activeSubstance.value}
                                                        </Typography>
                                                        <Typography variant="h5" gutterBottom>
                                                            Термін придатності: {goods.instruction.bestBeforeDate.value}
                                                        </Typography>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={5}>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={9}>
                                                        <Typography variant="h5" gutterBottom>
                                                            {goods.price} UAH
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item lg={3}>
                                                        <FavoriteBorderOutlinedIcon/>
                                                    </Grid>
                                                </Grid>
                                                <Box display="flex" alignItems="center">
                                                    <Button variant="outlined" onClick={handleDecrement}>
                                                        -
                                                    </Button>
                                                    <Box mx={2}>{quantity}</Box>
                                                    <Button variant="outlined" onClick={handleIncrement}>
                                                        +
                                                    </Button>
                                                </Box>
                                                <Button variant="outlined" onClick={handleDecrement}>
                                                    Купить в один клик
                                                </Button>
                                                <Button variant="outlined" onClick={handleDecrement}>
                                                    В козину
                                                </Button>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Typography variant="h4" component="h4" gutterBottom sx={{
                                }}>
                                    Інструкція
                                </Typography>
                                <Box>
                                    <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                        {goods.instruction.manufacturer.title}
                                    </Typography>
                                    <Typography variant="p" component="p" gutterBottom sx={{}}>
                                        {goods.instruction.manufacturer.value}
                                    </Typography>

                                    <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                        {goods.instruction.brieflyAbout.title}
                                    </Typography>
                                    <Typography variant="p" component="p" gutterBottom sx={{}}>
                                        {goods.instruction.brieflyAbout.value}
                                    </Typography>

                                    <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                        {goods.instruction.indications.title}
                                    </Typography>
                                    <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                        {goods.instruction.indications.value}
                                    </Typography>

                                    <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                        {goods.instruction.howToTake.title}
                                    </Typography>
                                    <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                        {goods.instruction.howToTake.value}
                                    </Typography>

                                    <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                        {goods.instruction.description.title}
                                    </Typography>
                                    <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                        {goods.instruction.description.value}
                                    </Typography>

                                    <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                        {goods.instruction.functionalBenefits.title}
                                    </Typography>
                                    <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                        {goods.instruction.functionalBenefits.value}
                                    </Typography>

                                    <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                        {goods.instruction.storageConditions.title}
                                    </Typography>
                                    <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                        {goods.instruction.storageConditions.value}
                                    </Typography>

                                    <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                        {goods.instruction.bestBeforeDate.title}
                                    </Typography>
                                    <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                        {goods.instruction.bestBeforeDate.value}
                                    </Typography>


                                    <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                        {goods.instruction.activeSubstance.title}
                                    </Typography>
                                    <Typography variant="p" component="p" gutterBottom>
                                        {goods.instruction.activeSubstance.value}
                                    </Typography>

                                    <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                        {goods.instruction.dosageForm.title}
                                    </Typography>
                                    <Typography variant="p" component="p" gutterBottom sx={{}}>
                                        {goods.instruction.dosageForm.value}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Typography variant="h4" component="h4" gutterBottom sx={{
                                    }}>
                                        Аналоги
                                    </Typography>
                                    <Grid container spacing={2}  sx={{}}>
                                         <Grid item lg={12} >
                                             <Grid container spacing={2}  sx={{}}>
                                                 <Grid item lg={3} >
                                                     <ProductCard goods={goods}/>
                                                 </Grid>
                                                 <Grid item lg={3} >
                                                     <ProductCard goods={goods}/>
                                                 </Grid>
                                                 <Grid item lg={3} >
                                                     <ProductCard goods={goods}/>
                                                 </Grid>
                                                 <Grid item lg={3} >
                                                     <ProductCard goods={goods}/>
                                                 </Grid>
                                             </Grid>
                                         </Grid>
                                    </Grid>

                                </Box>

                                <Box>
                                    <Typography variant="h4" component="h4" gutterBottom sx={{
                                    }}>
                                       Відгуки
                                    </Typography>
                                </Box>
                            </TabPanel>



                            <TabPanel value="2">
                                <Grid container spacing={2}  sx={{ }}>
                                    <Grid item lg={5} >
                                        <Grid container spacing={2} sx={{ }}>
                                            <Grid item lg={4} >
                                                <ImageList cols={1}>
                                                    <ImageListItem>
                                                        <img src={goods.img[1]} alt="Image 1" />
                                                    </ImageListItem>
                                                    <ImageListItem>
                                                        <img src={goods.img[2]} alt="Image 2" />
                                                    </ImageListItem>
                                                    <ImageListItem>
                                                        <img src={goods.img[3]} alt="Image 3" />
                                                    </ImageListItem>
                                                </ImageList>
                                            </Grid>
                                            <Grid item lg={8} >
                                                <ImageList rowHeight="100%" cols={1}>
                                                    <ImageListItem>
                                                        <img src={goods.img[0]} alt="Image 4" />
                                                    </ImageListItem>
                                                </ImageList>
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid item lg={7}>
                                        <Grid container spacing={2}>
                                            <Grid item lg={7}>
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
                                                    <Typography variant="p" gutterBottom>
                                                        {goods.quantity > 0 ? "Є в наявності" : "Товар відсутній"}
                                                    </Typography>
                                                    <Typography variant="p" gutterBottom>
                                                        {goods.article}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ width: '100%' }}>
                                                    <Typography variant="h4" gutterBottom>
                                                        Характеристики
                                                    </Typography>
                                                    <Stack spacing={2}>
                                                        <Typography variant="h5" gutterBottom>
                                                            Виробник: {goods.instruction.manufacturer.value}
                                                        </Typography>
                                                        <Typography variant="h5" gutterBottom>
                                                            Діюча речовина: {goods.instruction.activeSubstance.value}
                                                        </Typography>
                                                        <Typography variant="h5" gutterBottom>
                                                            Термін придатності: {goods.instruction.bestBeforeDate.value}
                                                        </Typography>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={5}>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={9}>
                                                        <Typography variant="h5" gutterBottom>
                                                            {goods.price} UAH
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item lg={3}>
                                                        <FavoriteBorderOutlinedIcon/>
                                                    </Grid>
                                                </Grid>
                                                <Box display="flex" alignItems="center">
                                                    <Button variant="outlined" onClick={handleDecrement}>
                                                        -
                                                    </Button>
                                                    <Box mx={2}>{quantity}</Box>
                                                    <Button variant="outlined" onClick={handleIncrement}>
                                                        +
                                                    </Button>
                                                </Box>
                                                <Button variant="outlined" onClick={handleDecrement}>
                                                    Купить в один клик
                                                </Button>
                                                <Button variant="outlined" onClick={handleDecrement}>
                                                    В козину
                                                </Button>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value="2">
                                <Typography variant="h4" component="h4" gutterBottom sx={{
                                }}>
                                    Інструкція
                                </Typography>
                                <Box>
                                <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                    {goods.instruction.manufacturer.title}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom sx={{}}>
                                    {goods.instruction.manufacturer.value}
                                </Typography>

                                <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                    {goods.instruction.brieflyAbout.title}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom sx={{}}>
                                    {goods.instruction.brieflyAbout.value}
                                </Typography>

                                <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                    {goods.instruction.indications.title}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                    {goods.instruction.indications.value}
                                </Typography>

                                <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                    {goods.instruction.howToTake.title}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                    {goods.instruction.howToTake.value}
                                </Typography>

                                <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                    {goods.instruction.description.title}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                    {goods.instruction.description.value}
                                </Typography>

                                <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                    {goods.instruction.functionalBenefits.title}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                    {goods.instruction.functionalBenefits.value}
                                </Typography>

                                <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                    {goods.instruction.storageConditions.title}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                    {goods.instruction.storageConditions.value}
                                </Typography>

                                <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                    {goods.instruction.bestBeforeDate.title}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom sx={{}} textAlign="justify">
                                    {goods.instruction.bestBeforeDate.value}
                                </Typography>


                                <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                    {goods.instruction.activeSubstance.title}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom>
                                    {goods.instruction.activeSubstance.value}
                                </Typography>

                                <Typography variant="h5" component="h5" gutterBottom sx={{}}>
                                    {goods.instruction.dosageForm.title}
                                </Typography>
                                <Typography variant="p" component="p" gutterBottom sx={{}}>
                                    {goods.instruction.dosageForm.value}
                                </Typography>
                            </Box>
                            </TabPanel>

                            <TabPanel value="3">
                                <Grid container spacing={2}  sx={{ }}>
                                    <Grid item lg={5} >
                                        <Grid container spacing={2} sx={{ }}>
                                            <Grid item lg={4} >
                                                <ImageList cols={1}>
                                                    <ImageListItem>
                                                        <img src={goods.img[1]} alt="Image 1" />
                                                    </ImageListItem>
                                                    <ImageListItem>
                                                        <img src={goods.img[2]} alt="Image 2" />
                                                    </ImageListItem>
                                                    <ImageListItem>
                                                        <img src={goods.img[3]} alt="Image 3" />
                                                    </ImageListItem>
                                                </ImageList>
                                            </Grid>
                                            <Grid item lg={8} >
                                                <ImageList rowHeight="100%" cols={1}>
                                                    <ImageListItem>
                                                        <img src={goods.img[0]} alt="Image 4" />
                                                    </ImageListItem>
                                                </ImageList>
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid item lg={7}>
                                        <Grid container spacing={2}>
                                            <Grid item lg={7}>
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
                                                    <Typography variant="p" gutterBottom>
                                                        {goods.quantity > 0 ? "Є в наявності" : "Товар відсутній"}
                                                    </Typography>
                                                    <Typography variant="p" gutterBottom>
                                                        {goods.article}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ width: '100%' }}>
                                                    <Typography variant="h4" gutterBottom>
                                                        Характеристики
                                                    </Typography>
                                                    <Stack spacing={2}>
                                                        <Typography variant="h5" gutterBottom>
                                                            Виробник: {goods.instruction.manufacturer.value}
                                                        </Typography>
                                                        <Typography variant="h5" gutterBottom>
                                                            Діюча речовина: {goods.instruction.activeSubstance.value}
                                                        </Typography>
                                                        <Typography variant="h5" gutterBottom>
                                                            Термін придатності: {goods.instruction.bestBeforeDate.value}
                                                        </Typography>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={5}>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={9}>
                                                        <Typography variant="h5" gutterBottom>
                                                            {goods.price} UAH
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item lg={3}>
                                                        <FavoriteBorderOutlinedIcon/>
                                                    </Grid>
                                                </Grid>
                                                <Box display="flex" alignItems="center">
                                                    <Button variant="outlined" onClick={handleDecrement}>
                                                        -
                                                    </Button>
                                                    <Box mx={2}>{quantity}</Box>
                                                    <Button variant="outlined" onClick={handleIncrement}>
                                                        +
                                                    </Button>
                                                </Box>
                                                <Button variant="outlined" onClick={handleDecrement}>
                                                    Купить в один клик
                                                </Button>
                                                <Button variant="outlined" onClick={handleDecrement}>
                                                    В козину
                                                </Button>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value="3">
                                <Box>
                                    <Typography variant="h4" component="h4" gutterBottom sx={{
                                    }}>
                                    Аналоги
                                    </Typography>
                                </Box>
                            </TabPanel>
                            <TabPanel value="4">
                                <Grid container spacing={2}  sx={{ }}>
                                    <Grid item lg={5} >
                                        <Grid container spacing={2} sx={{ }}>
                                            <Grid item lg={4} >
                                                <ImageList cols={1}>
                                                    <ImageListItem>
                                                        <img src={goods.img[1]} alt="Image 1" />
                                                    </ImageListItem>
                                                    <ImageListItem>
                                                        <img src={goods.img[2]} alt="Image 2" />
                                                    </ImageListItem>
                                                    <ImageListItem>
                                                        <img src={goods.img[3]} alt="Image 3" />
                                                    </ImageListItem>
                                                </ImageList>
                                            </Grid>
                                            <Grid item lg={8} >
                                                <ImageList rowHeight="100%" cols={1}>
                                                    <ImageListItem>
                                                        <img src={goods.img[0]} alt="Image 4" />
                                                    </ImageListItem>
                                                </ImageList>
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid item lg={7}>
                                        <Grid container spacing={2}>
                                            <Grid item lg={7}>
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
                                                    <Typography variant="p" gutterBottom>
                                                        {goods.quantity > 0 ? "Є в наявності" : "Товар відсутній"}
                                                    </Typography>
                                                    <Typography variant="p" gutterBottom>
                                                        {goods.article}
                                                    </Typography>
                                                </Box>

                                                <Box sx={{ width: '100%' }}>
                                                    <Typography variant="h4" gutterBottom>
                                                        Характеристики
                                                    </Typography>
                                                    <Stack spacing={2}>
                                                        <Typography variant="h5" gutterBottom>
                                                            Виробник: {goods.instruction.manufacturer.value}
                                                        </Typography>
                                                        <Typography variant="h5" gutterBottom>
                                                            Діюча речовина: {goods.instruction.activeSubstance.value}
                                                        </Typography>
                                                        <Typography variant="h5" gutterBottom>
                                                            Термін придатності: {goods.instruction.bestBeforeDate.value}
                                                        </Typography>
                                                    </Stack>
                                                </Box>
                                            </Grid>
                                            <Grid item lg={5}>
                                                <Grid container spacing={2}>
                                                    <Grid item lg={9}>
                                                        <Typography variant="h5" gutterBottom>
                                                            {goods.price} UAH
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item lg={3}>
                                                        <FavoriteBorderOutlinedIcon/>
                                                    </Grid>
                                                </Grid>
                                                <Box display="flex" alignItems="center">
                                                    <Button variant="outlined" onClick={handleDecrement}>
                                                        -
                                                    </Button>
                                                    <Box mx={2}>{quantity}</Box>
                                                    <Button variant="outlined" onClick={handleIncrement}>
                                                        +
                                                    </Button>
                                                </Box>
                                                <Button variant="outlined" onClick={handleDecrement}>
                                                    Купить в один клик
                                                </Button>
                                                <Button variant="outlined" onClick={handleDecrement}>
                                                    В козину
                                                </Button>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Box>
                                    <Typography variant="h4" component="h4" gutterBottom sx={{
                                    }}>
                                        Відгуки
                                    </Typography>
                                </Box>
                            </TabPanel>

                        </TabContext>
                    </Box>
                </Grid>


                {/*<Grid item lg={12}>*/}
                {/*    <Typography variant="h6" gutterBottom>*/}
                {/*        Subheading 2*/}
                {/*    </Typography>*/}
                {/*    <Grid container spacing={2}>*/}
                {/*        <Grid item lg={6} md={6}>*/}
                {/*            <Typography variant="body1">*/}
                {/*                Content 3*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*        <Grid item lg={12} md={6}>*/}
                {/*            <Typography variant="body1">*/}
                {/*                Content 4*/}
                {/*            </Typography>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}
            </Grid>
        </Container>





            // <Container sx={{border: "1px solid red", width:1500}}>
            //     <Grid container spacing={1} sx={{ border: '1px solid grey' }}>
            //
            //         <Grid item xl={12}>
            //             <Typography variant="h5" component="h5" gutterBottom sx={{
            //                 border: '1px solid grey',
            //             }}>
            //                 Base routing
            //             </Typography>
            //         </Grid>
            //
            //         <Grid item xl={12}>
            //             <Box
            //                 sx={{
            //                     display: 'flex',
            //                     alignItems: 'center',
            //                     border: '1px solid grey',
            //                 }}
            //             >
            //                 <Typography variant="h3" component="h3" gutterBottom>
            //                     {goods.name}
            //                 </Typography>
            //             </Box>
            //         </Grid>
            //
            //         <Grid item xl={12}>
            //             <Grid container spacing={2} sx={{ border: '1px solid grey' }}>
            //                 <Grid item xl={5}>
            //                     Image
            //                 </Grid>
            //                 <Grid item xl={7}>
            //                     Additional info
            //                 </Grid>
            //             </Grid>
            //         </Grid>
            //
            //     </Grid>
            // </Container>
    );
};

export default App;


