# `createSubagentRuntime/abortSubagent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535547-535580](../../../../../../reference/runtime/sand-eval-runner.cjs#L535547-L535580) | `FunctionDeclaration` | não | `params` |
| [evaluation:535608-535608](../../../../../../reference/runtime/sand-eval-runner.cjs#L535608-L535608) | `ArrowFunctionExpression` | não | `subagentAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535547-535580](../../../../../../reference/runtime/sand-eval-runner.cjs#L535547-L535580) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:535608-535608](../../../../../../reference/runtime/sand-eval-runner.cjs#L535608-L535608) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:535608 usa retorno implícito de arrow function.

### evaluation:535547

Chamadas escritas diretamente neste corpo: `abortCleanups.set`, `abortingSubagents.add`, `abortingSubagents.has`, `backgroundSubagentRuns.has`, `host.onPendingWakeDisarmed`, `pendingSubagentSteers.delete`, `subagentMeta.get`, `subagentRegistry.get`, `subagentSessions.get`.

SHA-256 do trecho: `15b639c895bbf3e27eaf2fb75f2650742a1adf5be1557fd3f6b57a30713560a8`.

### evaluation:535608

Chamadas escritas diretamente neste corpo: `abortSubagent`.

SHA-256 do trecho: `ad8f9e15722d562169735472d8b25c9cb771297438f4ea3ab2b7c917d303bd05`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
