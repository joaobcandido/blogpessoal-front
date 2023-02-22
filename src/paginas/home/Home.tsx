import { Box, Button, Grid, Typography } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { TokenState } from '../../store/tokens/tokensReducer';
import './Home.css';

function Home() {

    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token, history])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={10}>
                    <Box  alignItems="center"   paddingX={40} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center"
                         className='titulo'>Seja bem vindo(a) ao blog do joão !!!!</Typography>
                       
                    </Box>
                    
                   
                </Grid>
                
                <Grid item xs={12} >
                    <img src="https://www.atulhost.com/wp-content/uploads/2017/10/blog-1536x864.jpg" alt="" width="100%" height="30%" />
                </Grid>

                
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;