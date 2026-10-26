# `createSubagentRuntime/buildRunningSubagentInfo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagent-runtime.ts` · [README do módulo](../../../../../modules/core/runner/subagent-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:535492-535508](../../../../../../reference/runtime/sand-eval-runner.cjs#L535492-L535508) | `FunctionDeclaration` | não | `subagentAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535492-535508](../../../../../../reference/runtime/sand-eval-runner.cjs#L535492-L535508) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:535492

Chamadas escritas diretamente neste corpo: `Date.now`, `Math.max`, `backgroundSubagentRuns.has`, `runner.getActivitySnapshot`, `runner.getObservedToolCallCount`, `runner.getTranscriptPath`, `subagentMeta.get`, `subagentRegistry.get`, `subagentSessions.get`.

SHA-256 do trecho: `87b56780ad3df48485620eaf8aff0ee9b637bb1302b216540fd255b3566ff448`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
