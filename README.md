# Projeto Integrador - Minha Página na Rede

Este projeto foi desenvolvido como requisito para as disciplinas de **Redes de Computadores** e **Desenvolvimento Front-End** do curso de Engenharia de Software no UniSenaiPR. O objetivo foi criar uma página web interativa e hospedá-la em uma infraestrutura de rede simulada.

## 👥 Integrantes
- **Klaiver Matheus Ferreira de Macedo**
- **Matheus Henrique Heppe Santana**
- **Gustavo Lucas Moreira**

## 🎯 Objetivo
Desenvolver uma aplicação web full-stack integrada a uma topologia de rede no Cisco Packet Tracer, demonstrando a relação cliente-servidor através de serviços HTTP e DNS.

## 🛠️ Tecnologias Utilizadas
- **Front-End:** HTML5, CSS3 (com design responsivo e Dark Mode) e JavaScript.
- **Infraestrutura:** Cisco Packet Tracer (Serviços HTTP e DNS).
- **IA Cognitiva:** Integração com motor cognitivo para gestão de alarmes.

## 🌐 Estrutura da Rede
- **LAN Clientes:** 192.168.1.0/24 (Gateway: 192.168.1.1)
- **Rede Servidor:** 10.0.0.0/24 (IP Servidor: 10.0.0.2 / Gateway: 10.0.0.1)

## 🚀 Funcionalidades JavaScript
- **Animação de Intro:** Controle de vídeo de abertura com `sessionStorage` ou classes CSS.
- **Interatividade:** Botão para *smooth scroll* até a seção de demonstração.
- **Validação de Formulário:** Captura de dados do usuário e feedback visual dinâmico com manipulação do DOM.

## 📂 Organização do Repositório
- `/frontend`: Código-fonte (`index.html`, `style.css`, `script.js`).
- `/imagens`: Ativos visuais (`logo.jpeg`, `frostmind.jpeg`, vídeos).
- `/packet-tracer`: Arquivo `.pkt` da topologia simulada.
- `/screenshots`: Evidências do funcionamento (topologia, ping, acesso via DNS).
- `/relatorio`: Arquivos `relatorio.pdf` e `relatorio.docx`.
- `/documentacao`: Tabela de IPs, comandos de roteador e logs de testes.

## 🔗 Acesso e Evidências
Consulte a pasta `/screenshots` para visualizar a topologia da rede, o sucesso do comando `ping` entre as redes e a página carregada via domínio DNS.