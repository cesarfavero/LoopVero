# TheGrok

Implementação independente em andamento para reproduzir o comportamento observável do Grok Bot 0.71.2.

- `Grok Bot.app/`: aplicativo original de referência, preservado localmente e ignorado pelo Git.
- `GrokBotResearch/`: materiais extraídos de pesquisa, preservados localmente e ignorados pelo Git.
- `apps/desktop/`: aplicação Electron/React própria.
- `docs/research/`: evidências e fronteiras da investigação.

## Execução

```sh
npm install
npm run dev
```

O fluxo de mensagem da interface chama o harness local, o CodexRouter no loopback e a ferramenta `get_local_time`. Os demais recursos de paridade ainda estão em construção e são acompanhados em `docs/PARITY_MATRIX.md`.
