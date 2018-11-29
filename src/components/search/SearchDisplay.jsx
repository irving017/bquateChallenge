import React from 'react';
import {TextField,Grid,Button,Select} from '@material-ui/core'

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
                        <Select
                        native
                        onChange={props.handleChange}
                        name="type"
                        inputProps={{
                        name: 'type',
                        id: 'age-native-simple',
                        }}
                        >
                        <option value="" />
                        <option value="artist">Artista</option>
                        <option value="recording">Cancion</option>
                        <option value="release">Album</option>
                        </Select>
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