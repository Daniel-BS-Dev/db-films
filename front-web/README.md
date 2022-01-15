3 Checklist

## Preparação

``````
node -v
yarn -v
````````

## INstalaçãodo yarn

``````
npm install --global yarn
````````

## Criando projeto
``````
yarn create react-app frontend --template typescript
````````
ou
``````
npx create-react-app frontend --template typescript
````````
### IMPORTANTE: deletar subpasta .git

## adicionar Bootstrap e CSS ao projeto
``````
yarn add bootstrap@5.1.3
````````

## Arquivo index.css
``````

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

:root {
  --color-primary: #4D41C0;
}

* {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
}

html, body {
    background-color: #E5E5E5;
}

a, a:hover {
  text-decoration: none;
  color: unset;
}
``````````

## Arquivo index.tsx
``````
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
````````

## Rotas: Instalando o react router dom
``````
yarn add react-router-dom@6.2.1 @types/react-router-dom@5.3.2
````````
