# `CloudAgentCompletionPoller.awaitCompletion/<callback>/finish`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agent-poll-loop.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-poll-loop-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513701-513709](../../../../../../../reference/runtime/host-main.cjs#L513701-L513709) | `ArrowFunctionExpression` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513701-513709](../../../../../../../reference/runtime/host-main.cjs#L513701-L513709) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:513701

Chamadas escritas diretamente neste corpo: `poll.dispose`, `resolve31`, `this.activeCompletionPolls.delete`.

Alvos de atribuição ou incremento: `settled`.

SHA-256 do trecho: `fcedda8fee2e6379d75fff28a97a675b15984fe0e355f22cb11c224229ca4647`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
