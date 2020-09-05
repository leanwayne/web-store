import { NextPage } from "next"
import SearchInput from "../../components/search-input"
import { Grid, Card, makeStyles, Theme, createStyles } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        '& > * + *':{
            marginTop: 20,
        }
    },
    card: {
        backgroundColor: 'red',
    }
  })
);

const SearchPage : NextPage = () => {

    const classes = useStyles();

    return(
        <div className={classes.root}>
            <SearchInput/>
            <Grid>
                <Card className={classes.card}>
                    Hola Mundo
                </Card>
            </Grid>
        </div>
    )
}


export default SearchPage
