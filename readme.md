# Imersão Full Cycle 3.0

Neste repositorio contém todo código feito na imersão full cycle 3.0

A imersão tem como objeto demonstrar tecnologias, ferramentas e conceitos utilizando em grandes empresas através de pequenos estudos de casos.

## Tecnologias e Ferramentas utilizadas:

- Docker
- Golang
- GRPC
- Kafka
- NestJS
- NextJS
- Elastic Search
- Kibana
- Kubernetes

## Estudo de casos

Essa imersão foi construido 5 microservicos para simular uma compra de uma loja em que existe dois microserviço em NextJS para front-end, um em NestJS que processa a criação de produtos e a realização de uma venda, um em golang para simular a validação de um cartão pelo banco e o último para consultar as compra realizadas e exibi-las em um endpoint rest.

Na imersão também foi demonstrado como gerar pacotes 
grpc usando protocol buffers e a fazer a comunicação entre os microserviços, usando o próprio grpc e gerando mensagens em um topíco no kafka, que também foi conectado ao elastic search para demonstrar a como criar algumas metricas e dashboard usando o kibana

## Como rodar ?

Para rodar é necessário ter o docker e o docker compose instalados

Para rodar basta entrar em cada diretorio e rodar:

```bash
docker compose up -d
```

De preferência a seguinte ordem de inicialização do serviço:

- apache-kafka
- database
- codebank
- store-api
- store-frontend
- invoices-api
- invoices-frontend


### endpoints dos serviços

- 3000 - API para criar produtos e relizar compras
- 3001 - Frontend para realizar a compra
- 3002 - API para visualizar os dados das compras
- 3003 - Frontend para visualizar as compras

## Meu aprendizado

A imersão FullCycle 3.0 é uma imersão com uma grande quantidade de conteúdos indo de 1H a 3H:30Min de video por aula. Conseguir assistir todas as 6 aulas disponíveis porém não realizei o deploy dos serviço no kubernetes pois ja tinha visto muito conteúdo e decidir não realizar essa parte da aula e fiquei por enquanto so na teoria do kubernetes.

Essa imersão pude ter a oportunidades de conhecer ferramentas incriveis como o elastic search, kibana e o kafka e pretendo depois me aprofundar melhor nela contudo pretendo focar mais na criação e executação de conteiner que para mim ainda é algo que tenho muito a melhorar ainda mais para aprender kubernetes.

