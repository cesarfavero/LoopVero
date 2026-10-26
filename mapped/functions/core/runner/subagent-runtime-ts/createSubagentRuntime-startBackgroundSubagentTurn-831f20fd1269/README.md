# `createSubagentRuntime/startBackgroundSubagentTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535289-535347](../../../../../../reference/runtime/sand-eval-runner.cjs#L535289-L535347) | `FunctionDeclaration` | não | `subagentAgentId, runTurn` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535289-535347](../../../../../../reference/runtime/sand-eval-runner.cjs#L535289-L535347) | 1 | 0 | 0 | 1 | 0 | 1 |

### evaluation:535289

Chamadas escritas diretamente neste corpo: `Promise.reject`, `backgroundSubagentRuns.set`, `computerUseSessions.get`, `host.subagentOwnership.join`, `promise2.then`, `runTurn`, `turn.then`.

Alvos de atribuição ou incremento: `computerUseSession.turns`, `turn`.

SHA-256 do trecho: `481bf52ac5447ebbecc90f5bc44676acf416c89f57e3c1bb7daa4161b53e2951`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
