# TheGrok

Implementação independente em andamento para reproduzir o comportamento observável do Grok Bot 0.71.2.

- `Grok Bot.app/`: aplicativo original de referência, preservado localmente e ignorado pelo Git.
- `GrokBotResearch/`: extração completa de pesquisa do Sand Host/harness, versionada neste repositório privado conforme autorização do usuário. Não publique esse conteúdo fora do repositório.
- `apps/desktop/`: aplicação Electron/React própria.
- `docs/research/`: evidências e fronteiras da investigação do cliente Electron e do harness distribuído.

## Execução

```sh
npm install
npm run dev
```

O fluxo de mensagem da interface chama o harness local, o CodexRouter no loopback e a ferramenta `get_local_time`. Os demais recursos de paridade ainda estão em construção e são acompanhados em `docs/PARITY_MATRIX.md`.

TheGrok não altera configurações nem padrões globais do CodexRouter usado pelo Codex. A integração existente é cliente somente e permanece limitada ao loopback do Mac. `GrokBotResearch/` serve como referência de análise; a execução local atual ainda não comprova equivalência com a arquitetura distribuída original.
