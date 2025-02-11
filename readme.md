# Processo Seletivo - Engenheiro de QA - Pleno

Como solicitado, os testes foram dividos em três categorias, sendo:

📌 1. Testes de UI (Interface)

📌 2. Testes de API

📌 3. Testes de Performance
##
1. Testes de UI (Interface)

Para os testes de UI, foi utilizado o Cypress. O projeto está localizado no seguinte caminho: Desafio-guia -> Teste de UI -> cypress -> e2e -> cenario_teste, com os comandos e elementos na pasta support. 
Foi utilizado o site "https://www.guiademoteis.com.br", entretanto todos os IDs e classes foram gerados de forma randômica, conforme solicitado. 

Os testes cobrem 4 areas, sendo elas:
* Preencher o formulário corretamente e enviar;
* Deixar campos obrigatórios vazios;
* Digitar uma senha fraca;
* Digitar e-mails diferentes nos campos de "E-mail" e "Confirmação de E-mail".

Para rodar os testes de UI com o Cypress, utilize o seguinte comando:
* npx cypress open

##
2. Testes de API

Para os testes de API, foi utilizado o Postman como API CLient e o Mockoon para criar um mock da API. Os arquivos se encontram na pasta Desafio-guia -> Teste de Api.

Os testes cobrem 3 casos:

* Requisições GET e POST;
* Validação de respostas HTTP (200, 400 e 500);
* Validação da estrutura JSON.

Os testes podem ser importados no Postman.

##
3. Testes de Performance

Para os testes de performance, foi utilizado o K6. O projeto está localizado em: Desafio-Guia -> Testes de Performance -> scenarios. O teste buscou simular 100 acessos simultâneos com um tempo máximo de resposta de 500ms e uma taxa de falha configurada para 50%, a fim de realizar testes de estresse.

O relatório após o teste se encontra abaixo :
* Tempo total do teste: 31s;
* Total de requisições HTTP: 5666;
* Tempo médio de espera: 39.2ms;
* Taxa de falhas: 50.00% - (taxa controlada para teste).

Para rodar o teste de performance com o K6, utilize o comando:
* k6 run --vus 100 --duration 30s load_test.js




