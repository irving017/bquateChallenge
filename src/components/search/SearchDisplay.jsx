import React from 'react';
import {TextField,Grid,Button} from '@material-ui/core'

const SearchDisplay = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}> 
                <Grid container spacing={8} justify={'center'} alignItems={'center'}>
                    <Grid item>
                        <TextField
                        onChange={props.handleChange}
                        name="search"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        select
                        onChange={props.handleChange}
                        name="type"
                        SelectProps={{
                            native: true 
                        }}
                        >
                            <option value="" selected disabled hidden>Selecciona una categoría</option>
                            <option value="artist">Artista</option>
                            <option value="recording">Cancion</option>
                            <option value="release">Album</option>
                        </TextField>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" type="submit">Buscar</Button>
                    </Grid>
                </Grid>
            </form> 
        </div>
    );
};

export default SearchDisplay;