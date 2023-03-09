import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Navbar.css';
import ModalPostagem from '../../postagens/modalPostagem/ModalPostagem';

function Navbar() {
    //const [token, setToken] = useLocalStorage('token');

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    let history = useHistory();

    const dispatch = useDispatch();

    function goLogout() {
        //setToken('')
        dispatch(addToken(''));
        //alert("Usuário deslogado")
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if (token !== "") {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense">
            <Box mx={4} >
               <ModalPostagem />
            </Box>

                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link>

                    

                    <Link to="/doacoes" className="text-decorator-none">
                        <Box mx={5} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                doacoes
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/titulo" className="text-decorator-none">
                        <Box mx={5} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                doações por título
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/ongs" className="text-decorator-none">
                        <Box mx={5} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                ongs
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/descricao" className="text-decorator-none">
                        <Box mx={5} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                ongs por descrição
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioOng" className="text-decorator-none">
                        <Box mx={5} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar ong
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/usuarios" className="text-decorator-none">
                        <Box mx={5} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                listar usuários
                            </Typography>
                        </Box>
                    </Link>
                   
                   
                                  
                       
                    <Box mx={9} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            sair
                        </Typography>
                    </Box>
                   
                    

                </Box>

            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;