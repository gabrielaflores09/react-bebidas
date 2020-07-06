import React,{useContext, useState} from 'react';
import {Card,
        CardActionArea,
        CardMedia,
        makeStyles, 
        CardActions,
        CardContent,
        Typography,
        Button,
        Modal,
        CardHeader
} from '@material-ui/core';

import {ModalContext} from '../context/ModalContext';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: 245,
    margin:10,
  },
  media: {
    height: 200,
  },
  mediaModal:{
    height: 210,
  },
  icono: {
    marginLeft:35,
    marginRight:5,
    fontSize:15,
  },
  content: {
      padding:10,
      paddingBottom:0,
  },
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '@media (max-width: 640px)': {
        width: 250,
    }
  },
}));

const Receta = ({receta}) => {
    const classes = useStyles();

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    const { ingredientes, guardarIdReceta, guardarIngredientes } = useContext(ModalContext)

    const mostrarIngredientes = ingredientes =>{
        let detalleIngredientes = [];

        for(let i=1; i<16; i++){
            if(ingredientes[`strIngredient${i}`]){
                detalleIngredientes.push(
                    <li>
                        {ingredientes[`strIngredient${i}`]}:  {ingredientes[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return detalleIngredientes;
    }
    console.log(ingredientes);
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
                        guardarIdReceta(receta.idDrink);
                        handleOpen();
                    }}
                >
                    Ver Receta
                </Button>
                <Modal
                    open={open}
                    onClose={()=>{
                        guardarIdReceta(null);
                        guardarIngredientes({});
                        handleClose();
                    }}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <Card>
                            <CardHeader
                                title={ingredientes.strDrink}
                            />
                            <CardActionArea>
                                <CardMedia
                                    className={classes.mediaModal}
                                    image={ingredientes.strDrinkThumb}
                                    title="imagen receta"
                                />
                            </CardActionArea>
                            
                            <CardContent>
                                <Typography variant="subtitle1">
                                    Instrucciones
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                    component="p"
                                >
                                    {ingredientes.strInstructions}
                                </Typography>
                                <Typography 
                                    variant="subtitle1" 
                                >
                                    Ingredientes y Cantidades
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    color="textSecondary" 
                                ><ul>
                                    {mostrarIngredientes(ingredientes)}
                                </ul> 
                                </Typography>

                            </CardContent>
                        </Card>
                    </div>
                </Modal>
            </CardActions>
        </Card>
     );
}
 
export default Receta;