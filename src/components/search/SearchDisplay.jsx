import React from 'react';
import {TextField,Grid,Button} from '@material-ui/core'

const SearchDisplay = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}> 
                <Grid container spacing={8} justify={'center'} alignItems={'center'}>
                    <Grid item>
                        <TextField
                        onChange={props.onChange}
                        name="search"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        select
                        onChange={props.onChange}
                        name="type"
                        value='hola'
                        />
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