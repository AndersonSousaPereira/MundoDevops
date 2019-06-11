# Instalando no Android

## Através do React Native CLI


### Pré-requisitos

1. Tenha o React Native CLI adequadamente instalado e configurado em seu computador, para tal, siga o passo a passo contido na aba "React Native CLI Quickstart" no link: https://facebook.github.io/react-native/docs/getting-started
2. Ative o modo desenvolvedor e garanta que a depuração seja ativa. Siga os seguintes tutoriais em sequencia: https://www.techtudo.com.br/dicas-e-tutoriais/noticia/2014/10/como-ativar-o-modo-desenvolvedor-no-android.html e https://www.techtudo.com.br/dicas-e-tutoriais/2018/06/como-ativar-a-depuracao-usb-do-android.ghtml
### Instalação

1. Conecte o cabo USB ao celular e permita a depuração.
2. Acesse a pasta raiz do projeto
3. Rode o comando "npm install"
4. Rode o comando "react-native run-android"

## Através do APK

### Pré-requisitos

1. Baixe no celular o apk contido na pasta "./apk" localizado na raiz do projeto

### Instalação
1. Inicie a instalação apertando sobre o arquivo baixado e logo em seguida no botão "INSTALAR"
2. Caso uma mensagem referente ao Play Protect seja gerada prossiga acionando o botão "INSTALAR ASSIM MESMO"


# Instalando no IOS

## Através do React Native CLI


### Pré-requisitos

1. Tenha o React Native CLI adequadamente instalado e configurado em seu computador, para tal, siga o passo a passo contido na aba "React Native CLI Quickstart" no link: https://facebook.github.io/react-native/docs/getting-started

### Instalação

1. Conecte o cabo USB ao celular.
2. Acesse a pasta raiz do projeto
3. Rode o comando "npm install"
3. Rode o comando "react-native run-ios"

## Observação

O seguinte aplicativo foi criado, desenvolvido e testado em um celular cujo sistema operacional é o Android. Qualquer inconsistência ou erro deve-se ao fato de não haver ambiente adequado para a configuração do mesmo, sendo que para tal seria necessária a existência de um Macbook e IPhone.

# Solução

Para a solução foram inseridos os seguintes plugins: 

1. "react-native-linear-gradient": para a inserção de gradiente;
2. "react-native-vector-icons" para a inserção dos incones de menu e configuração;
3. "react-native-router-flux" para a troca de cenas caso no futuro existam mais implementações de telas;

O teste é composto de três componentes, são eles:

1. content: responsável por armazenar todas as possíveis futuras telas e proporcionar a troca das mesmas já que para tal feito é utilizado o plugin "react-native-router-flux" e a utilização da função Actions();
2. status: resposável por permitir a troca de estilo da StatusBar;
3. inicio: responsável por conter todos os componentes referentes a tela de início.

O projeto é gerenciado principalmente pelo state do componente inicio, que recebe duas propriedades: filters e exercices. Para suas leituras a função map do JavaScript foi utilizada. Também poderia ser utilizado como alternativa o redux caso houvessem mais telas ou uma estrutura mais complexa de componentes. Como o projeto é baseado em apenas uma tela, e os componentes na mesma não compartilham propriedades, o redux não se fez necessário.  

As imagens dos personagens forma convertidas para vetoriais através do Illustrator, pois apresentavam baixa qualidade quando compiladas. 

*Todos os componentes, imagens e fontes foram inserido na pasta "./assets"
