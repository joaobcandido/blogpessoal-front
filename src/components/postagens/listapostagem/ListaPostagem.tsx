import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Postagem from '../../../models/Postagem';
import { buscaTitulo } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './ListaPostagem.css';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])
  //const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      //alert("Você precisa estar logado")
      toast.error('Você precisa estar logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      history.push("/login")

    }
  }, [token, history])

  async function getPost() {
    await buscaTitulo("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()

  }, [posts.length, getPost])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} >
            <Card variant="outlined">
              <CardContent>
                
                <Typography variant="h3" component="h2">
                 doador:   {post.titulo}
                </Typography>
                <Typography variant="h4" component="h2">
                  tipo da doação:   {post.texto}
                </Typography>
                
                <Typography variant="h4" component="p">
                 nome da ong:   {post.tema?.descricao}
                </Typography>
                <Typography variant="h4" component="p">
                 endereço da ong:   {post.tema?.valor}
                </Typography>
                <Typography variant="h5" component="p">
                 data:   {post.data}
                </Typography>
              </CardContent>
              {/*
              <CardActions>
                <Box display="flex" justifyContent="center" mb={2}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
        </CardActions>*/}
            </Card>
          </Box>
        ))
      }
    </>
  )
}

export default ListaPostagem;