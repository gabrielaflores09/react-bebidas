import React,{useContext} from 'react';
import { ThumbUp, Visibility} from '@material-ui/icons';
import {Card,
        CardActionArea,
        CardMedia,
        makeStyles, 
        CardActions,
        CardContent,
        Typography,
        Button} from '@material-ui/core';

import {ModalContext} from '../context/ModalContext';

const useStyles = makeStyles({
  root: {
    width: 245,
    margin:10,
  },
  media: {
    height: 200,
  },
  icono: {
    marginLeft:35,
    marginRight:5,
    fontSize:15,
  },
  content: {
      padding:10,
      paddingBottom:0,
  }
});

const Receta = ({receta}) => {
    const classes = useStyles();

    const { guardarIdReceta } = useContext(ModalContext)

    return ( 
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={receta.strDrinkThumb}
                    title={receta.strDrink}
                />
            </CardActionArea>
            <CardContent className={classes.content}>
                <Typography 
                    gutterBottom 
                    variant="subtitle2" 
                    align="justify"    
                >
                    {receta.strDrink}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    size="small" 
                    variant="outlined" 
                    fullWidth 
                    color="primary" 
                    onClick={()=>{
                        guardarIdReceta(receta.idDrink)
                    }}
                >
                    Ver Receta
                </Button>
            </CardActions>
        </Card>
     );
}
 
export default Receta;