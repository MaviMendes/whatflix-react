//esse doc vai inicializar o react
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/categoria'
//a app está sendo inserida dentro do root
const Pagina404 = () => (<div>Página 404</div>)
ReactDOM.render(
  <BrowserRouter>
  <Switch>
  <Route path="/" component={Home} exact/>
  <Route path="/cadastro/video" component={CadastroVideo}/>
  <Route path="/cadastro/categoria" component={CadastroCategoria}/>
  <Route  component={Pagina404} />
  </Switch>
  </BrowserRouter>,
  /*<React.StrictMode>
    <App /> 
  </React.StrictMode>, o que tinha antes*/
  document.getElementById('root')
);

//browser router no router dom fica em volta de tudo
//em volta da aplicação vai ter um sistema de roteamento, quando ela carregar, a gente vai ter que decidir qual página que vai carregar
/*Switch faz o papel do if
Route: como vamos declarar cada uma das páginas que temos 
Quando o usuário estiver em /, vai renderizar App, isso que significa Route path="/" component={App}
Imagine como um fake route, estamos transformando o que o browser faz, fazendo na mão. Por exemplo, o cadastro video
não queremos que recarregue quando clicar nele, apenas que recarregue x componentes
digita /blablabla, vc está digitando barra, se colocar exact depois de {App} aparece uma page em branco
O que está por último é o que vai ser carregado se não for encontrada nenhuma correspondência
Nesse caso, é isso aqui: <Route  component={App} />
*/