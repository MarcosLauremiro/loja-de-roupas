# Projeto de Loja de Roupas em React

Este projeto é uma aplicação web desenvolvida em React que simula uma loja de roupas online. A aplicação é estruturada com estilos globais, um contexto global para gerenciamento de estado e rotas para páginas como home, login, registro e painel administrativo.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- **`/src`**: Contém todos os arquivos relacionados ao código-fonte.
  - **`/styles`**: Inclui arquivos CSS para redefinição de estilos e estilos globais.
  - **`/providers`**: Contém provedores de contexto, como `GlobalProvider` e `AdmProvider`.
  - **`/routes`**: Configurações e componentes relacionados às rotas da aplicação.
  - **`/pages`**: Páginas da aplicação, incluindo Home, Login, Registro, Painel Administrativo e detalhes do produto.
  - **`App.js`**: Arquivo principal que integra os provedores de contexto, estilos globais e rotas para renderizar a aplicação.

## Componentes e Funcionalidades

### `GlobalProvider`

Provedor de contexto global que gerencia o estado global da aplicação. Pode ser utilizado para compartilhar informações como carrinho de compras, autenticação, etc.

### Rotas

- **`HomePage`**: Página inicial da loja, exibindo produtos e detalhes.
- **`LoginPage`**: Página de login para acesso à área administrativa.
- **`RegisterPage`**: Página de registro para novos usuários.
- **`ProductPage`**: Página com detalhes específicos de um produto.

### Rotas Protegidas

- **`DashboardPage`**: Página do painel administrativo, acessível apenas para usuários autenticados.

## Estilos

Os estilos globais estão divididos em dois arquivos:

- **`GlobalStyled.css`**: Fornece estilos globais compartilhados por vários componentes.

- **`GlobalReset.css`**: Reseta os estilos padrão do navegador para garantir uma aparência consistente.

## Toasts

A aplicação utiliza o componente `ToastContainer` da biblioteca `react-toastify` para exibir mensagens de notificação.

## Executando o Projeto

1. Certifique-se de ter o Node.js instalado.

2. Execute `npm install` para instalar as dependências.

3. Execute `npm start` para iniciar o servidor de desenvolvimento.

4. Abra [http://localhost:3000](http://localhost:3000) no navegador para acessar a loja de roupas.

## Personalização

Sinta-se à vontade para personalizar e expandir este projeto de acordo com suas necessidades específicas. Adicione funcionalidades como carrinho de compras, páginas de categoria, pagamento online, entre outras. Este projeto serve como uma base sólida para o desenvolvimento de uma loja de roupas online mais avançada e personalizada.
