# `createTurnSettle/externalSendForTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590834-590867](../../../../../../reference/runtime/sand-eval-runner.cjs#L590834-L590867) | `ArrowFunctionExpression` | não | `calls, firstPartyToolCalls, reviewedCommits, requestSource, onlyExternalSend, hostListingFailed, parentPromptMessages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590834-590867](../../../../../../reference/runtime/sand-eval-runner.cjs#L590834-L590867) | 7 | 0 | 0 | 1 | 0 | 0 |

### evaluation:590834

Chamadas escritas diretamente neste corpo: `.map`, `candidateToolCallIds.filter`, `candidateToolCallIds.flatMap`, `new Set`, `parentPromptMessages.filter`, `withServerHost`, `withoutServerHost`.

SHA-256 do trecho: `d1158511c8c32a505bdfe0832e7252920e32c8834238da260f6ffa79e12d04f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
