# `createSandSubagentLaunchPrefetch/start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/subagent-launch-prefetch.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:556431-556439](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556431-L556439) | `FunctionExpression` | não | `ctx, toolCallId, stateHandler` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556431-556439](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556431-L556439) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:556431

Chamadas escritas diretamente neste corpo: `ctx.withDetached`, `prefetchOutlivingTheArgumentStream`, `startedToolCalls.add`, `startedToolCalls.has`.

SHA-256 do trecho: `16bb020bf3460e32d97e7f90e315fa74d2c24eae9acbe85b34d7b53ca17dbf4b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
