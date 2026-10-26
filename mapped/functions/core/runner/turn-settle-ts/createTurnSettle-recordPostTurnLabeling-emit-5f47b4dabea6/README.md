# `createTurnSettle/recordPostTurnLabeling/emit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-settle.ts` · [README do módulo](../../../../../modules/core/runner/turn-settle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590960-590998](../../../../../../reference/runtime/sand-eval-runner.cjs#L590960-L590998) | `ArrowFunctionExpression` | não | `resolveHost, hostListingFailed = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590960-590998](../../../../../../reference/runtime/sand-eval-runner.cjs#L590960-L590998) | 3 | 0 | 0 | 2 | 0 | 2 |

### evaluation:590960

Chamadas escritas diretamente neste corpo: `.some`, `.then`, `emitWithParent`, `errorLogTag`, `firstPartyToolCallsForTurn`, `host.externalSendConnectors`, `host.parentPromptMessages`, `mcpToolCallsForTurn`, `recordSubagentSends`, `reportHostDiagnostic`, `reviewedCommitToolCallsForTurn`, `withServerHost`, `withTimeout`.

Alvos de atribuição ou incremento: `calls`, `firstParty`, `parent`, `reviewedCommits`, `subagentSent`.

SHA-256 do trecho: `2b23f2d276f8ea6775326c36d404975ca978d7126e1481abe86050be1fcad246`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
