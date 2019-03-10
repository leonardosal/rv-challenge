# RV challenge

## Link do projeto

https://rv-challenge.netlify.com/

## Como rodar o código

1. Clonar o repositório rv-challenge

``` $ git clone https://github.com/leonardosal/rv-challenge```

2. Instalar as dependências

``` $ yarn install```

3. Run project

``` $ yarn start```

## Tecnologias Utilizadas

* React
  * Por que?
    - Por familiariadade, pela simplicidade e porque faz parte da stack da RV atualmente.
* Create-React-App
  * Por que?
    - Por simplificar o processo de configuração de build do projeto.
* Styled-Components
  * Por que?
    - Por conseguir usar javascript em conjunto, por resolver os prefixos dos navegadores, e pela integração com o react.

## Comentários sobre a solução

* Otimizei o tamanho das imagens e coloquei em uma hospedagem própria para imagens com isso houve um ganho em velocidade ao abrir a página.
* Usei o React-Lodable para dividir cada página em um bundle diferente fazendo ele carregar somente os bundle que a página necessita
