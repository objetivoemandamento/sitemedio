# VÉRTICE — Site Médio (R$ 700)

Modelo comercial reutilizável para negócios estabelecidos, com foco em apresentação e geração de contatos. Este repositório é uma base de projeto, não um site publicado.

## Escopo
- Site responsivo com apresentação, serviços, galeria/depoimentos opcionais, localização e contato.
- CTA de WhatsApp com mensagem pré-preenchida.
- Solicitação de agendamento pelo site: o formulário prepara uma mensagem e encaminha ao WhatsApp do estabelecimento. A confirmação é feita pelo estabelecimento; não há calendário nem reserva automática nesta versão.
- Sem checkout ou pagamento on-line.
- Sem banco de dados por padrão.

## Stack planejada
Vite + React + CSS responsivo.

## Personalização por cliente
Editar os dados em `src/config.js`, substituir imagens e conteúdo, configurar telefone/WhatsApp, serviços e endereço. Validar todos os links antes de publicar.

## Publicação
Compatível com hospedagem estática para Vite. Domínio, hospedagem, manutenção e custos de terceiros devem ser descritos separadamente na proposta.

## Status
Estrutura inicial em desenvolvimento.

## Executar localmente

1. Instale Node.js LTS.
2. Execute `npm install`.
3. Execute `npm run dev` para desenvolvimento.
4. Execute `npm run build` para gerar a versão de produção em `dist/`.

## Antes de publicar
- Troque todos os dados de demonstração em `src/config.js`.
- Teste o WhatsApp em celular e computador.
- Use apenas fotos e textos autorizados e informações verdadeiras.
- Confira acessibilidade, responsividade e links.
- Não publique segredos, tokens ou credenciais no frontend ou no GitHub.
