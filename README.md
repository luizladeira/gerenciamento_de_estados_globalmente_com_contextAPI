![Meteora](thumbnail.png)

# Meteora - E-commerce de Moda

O Meteora é um projeto de e-commerce em fase de desenvolvimento inicial. Este README fornece informações sobre o projeto, suas funcionalidades e como executá-lo em seu ambiente local.

![GIF da aplicação em execução](meteora-app.gif)

## 🔨 Funcionalidades do projeto

Neste estágio inicial de desenvolvimento, o Meteora possui as seguintes funcionalidades:

- Adicionar itens ao carrinho
- Remover itens do carrinho
- Visualizar a página do carrinho
- Deletar itens do carrinho

O [Figma dessa aplicação você encontra aqui](https://www.figma.com/file/R5ATrWK1nC44Eyeo6XZXlr/Meteora---Context-API?node-id=2386%3A2430&mode=dev).

## ✔️ Técnicas e tecnologias utilizadas

O projeto Meteora utiliza as seguintes tecnologias e bibliotecas:

- `React` - Framework JavaScript
- `Vite` - Build tool para desenvolvimento rápido
- `JavaScript` - Linguagem de programação principal
- `Context API` - Para gerenciamento de estado
- `useReducer` - Para controle de estado
- `useMemo` - Para otimização de desempenho
- `Bootstrap` - Framework de design e componentes

## 🛠️ Abrir e rodar o projeto

Para executar o projeto Meteora em seu ambiente local, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Baixe o repositório do projeto:

3. Extraia os arquivos para uma pasta de sua preferência.

4. Navegue até a pasta em questão via terminal (cmd):

```bash
cd repo-meteora
```

5. Instale as dependências usando o npm:

```bash
npm install
```

6. Inicie o projeto localmente:

```bash
npm run dev
```

7. Abra seu navegador e acesse a url exibida no seu terminal para visualizar o projeto.

## 📚 Mais informações do projeto

O Meteora é um e-commerce fictício de moda em constante desenvolvimento. Este projeto visa aprimorar as habilidades em React, e apresentar a Context API como uma solução para gerenciamento de estados globais de uma aplicação React.

O design e protótipo deste projeto podem ser encontrados [aqui](https://www.figma.com/file/R5ATrWK1nC44Eyeo6XZXlr/Meteora---Context-API?node-id=2386%3A2430&mode=dev).

Aproveite o desenvolvimento e aprimoramento do Meteora!


## Elevação de estado

Elevação de estado é exatamente o que estamos fazendo no componente App.jsx. Definimos todas as propriedades e estados nesse componente e os passamos para outros componentes filhos. Portanto, a elevação de estado define os estados no nível mais acima da aplicação e passa esses estados para os componentes filhos, ou children, via props.


## Funcionamento do Context API

O Context API é um recurso do próprio React; não é uma biblioteca externa de gerenciamento de estados, mas sim algo do React. Portanto, está na API do React e podemos utilizá-lo.

Qual é a ideia do Context API? Você se lembra do exemplo da lata de tinta no corredor? É basicamente essa. O Context API é um local onde disponibilizamos os estados da aplicação e eles se tornam acessíveis para todos os componentes de uma só vez. Assim, não precisamos nos preocupar em passar a propriedade para o componente certo. Ela vai estar no Context API e simplesmente pegamos de lá.

No conceito do Context API, definimos os estados globais em um arquivo e depois compartilhamos esses estados com nossos componentes. 


## Para saber mais: se aprofundando na Context API

Vamos pensar em um aplicativo de lista de tarefas, onde você tem diferentes seções para tarefas urgentes e não urgentes. Tem uma seção geral onde você consegue visualizar todas as tarefas mas tem também seções individuais onde você consegue ver as tarefas urgentes e não urgentes de forma separada. Porém, você deseja compartilhar a capacidade de marcar uma tarefa como concluída em ambas as seções.

Como garantir que, ao marcar uma tarefa como concluída em sua própria seção, ela também seja marcada como concluída na seção geral sem passar manualmente a informação entre os componentes?

Aqui entra a Context API do React. É como ter uma marcação global em suas tarefas, onde, ao marcar como concluída em um lugar, automaticamente afeta todos os outros lugares que exibem a mesma tarefa.

A Context API é uma maneira de compartilhar dados globalmente entre componentes sem a necessidade de passar propriedades manualmente. Ela ajuda a evitar a "prop drilling", tornando o compartilhamento de informações mais direto.

Exemplos de onde aplicar a Context API:
Autenticação de Usuário:
Manter o estado de autenticação do usuário globalmente, permitindo que componentes em qualquer parte da aplicação acessem informações sobre o usuário logado.
Temas e Estilos:
Compartilhar informações sobre o tema atual da aplicação, como cores, fontes e estilos, para garantir uma consistência visual em toda a aplicação.
Configurações do Usuário:
Armazenar preferências e configurações do usuário para que elas possam ser acessadas e modificadas em diferentes partes da interface.
Internacionalização (i18n):
Manter as informações de idioma selecionado globalmente, permitindo que todos os componentes se adaptem ao idioma escolhido pelo usuário.
Quando Usar a Context API:
Use a Context API quando:

Houver a necessidade de compartilhar informações ou estado entre componentes que estão distantes na árvore de componentes.
Evitar a "prop drilling" (passar propriedades através de vários níveis de componentes) se tornar impraticável ou confuso.
Dicas para Melhor Uso:
Use a Context API para compartilhar dados que são verdadeiramente globais na aplicação.
Avalie a necessidade de re-renderização de componentes dependentes do contexto ao realizar atualizações.
Se você quiser saber mais sobre o que é, os casos de uso, quando usar, vantagens e desvantagens da Context API, e até entender o que é o fenômeno de prop drilling eu recomendo fortemente que você dê uma [lida na documentação para reforçar seus aprendizados](https://react.dev/learn/passing-data-deeply-with-context).

## Provider vs Consumer

O Provider é usado para envolver a parte da aplicação que fornece os dados, enquanto o Consumer é utilizado nos componentes que precisam acessar esses dados. Eles formam uma dupla poderosa para resolver o problema de comunicação.

[Documentação do useContext()](https://react.dev/reference/react/useContext) 

## Solid

Primeiro que SOLID é um conceito de POO (Programação Orientada a Objetos) muito forte em linguagens orientadas a Objetos como Java e C#. Cada letra da sigla SOLID é a inicial de um dos princípio que regem a POO, para criarmos um código mais consistente, limpo e saudável a longo prazo. Se liga:

S — Single Responsiblity Principle (Princípio da responsabilidade única)
O — Open-Closed Principle (Princípio Aberto-Fechado)
L — Liskov Substitution Principle (Princípio da substituição de Liskov)
I — Interface Segregation Principle (Princípio da Segregação da Interface)
D — Dependency Inversion Principle (Princípio da inversão da dependência)
E agora você deve está se perguntando: “Legal, mas o que isso tem a ver com Front-end? “ ou então “Como eu uso esses conceitos nas minhas aplicações React? ”.

Calma que o nosso dev de boina favorito, Vinicius Neves, fez uma série de artigos em um blog muito popular na comunidade explicando cada princípio e como eles podem ser adaptados e usados no Front-end, principalmente em aplicações React. Confere aí:

Princípio da responsabilidade única
Princípio Aberto-Fechado
Princípio da substituição de Liskov
Princípio da Segregação da Interface
Princípio da inversão da dependência

## Documentação de contextos aninhados

[Documentação de Contextos Aninhados](https://pt-br.legacy.reactjs.org/docs/context.html#consuming-multiple-contexts)

## Documentação de Hooks Customizados

[Documentação de Hooks Customizados](https://react.dev/learn/reusing-logic-with-custom-hooks#)