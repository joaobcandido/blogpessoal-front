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
           
               
                
                <Grid item xs={12} >
                    <img src="https://www.thespruce.com/thmb/8oUcr_AtQAYom4jUpzDlxDKDAC4=/4495x3000/filters:fill(auto,1)/where-to-donate-everything-in-home-2648117_02-f88c1f8b70324c709dfbd8df9db217c0.jpg" alt="" width="100%" height="800px" />
                   
                    
                </Grid>
                
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            
        </>
    );
}

export default Home;