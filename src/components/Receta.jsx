import React,{useContext, useState} from 'react';
import {Card,
        CardActionArea,
        CardMedia,
        makeStyles, 
        CardActions,
        CardContent,
        Typography,
        Button,
        Modal
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
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
                        handleClose();
                    }}
                >
                    <div style={modalStyle} className={classes.paper}>

                    </div>
                </Modal>
            </CardActions>
        </Card>
     );
}
 
export default Receta;