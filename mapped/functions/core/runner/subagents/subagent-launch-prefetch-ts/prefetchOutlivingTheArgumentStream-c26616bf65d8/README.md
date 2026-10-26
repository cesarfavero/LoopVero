# `prefetchOutlivingTheArgumentStream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/subagent-launch-prefetch.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/subagent-launch-prefetch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:556443-556456](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556443-L556456) | `FunctionDeclaration` | sim | `detachedCtx, stateHandler, warmLaunchReviewContext` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:556443-556456](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556443-L556456) | 0 | 0 | 1 | 0 | 0 | 1 |

### evaluation:556443

Chamadas escritas diretamente neste corpo: `Promise.allSettled`, `__callDispose`, `__using`, `createSpan`, `detachedCtx.withName`, `stateHandler.ensureSubagentStatesLoaded`, `warmLaunchReviewContext`.

SHA-256 do trecho: `ff4c69e4484d8f636a1442358905bed9ab8f367f17a26edffabedf15502ca62e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
