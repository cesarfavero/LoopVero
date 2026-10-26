# `createTurnPerformanceObservation/recordPreFirstMessageRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547399-547433](../../../../../../reference/runtime/sand-eval-runner.cjs#L547399-L547433) | `FunctionDeclaration` | não | `{     harness: harness2,     step,     startedAt: startedAt2,     firstTokenAt,     endedAt   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547399-547433](../../../../../../reference/runtime/sand-eval-runner.cjs#L547399-L547433) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547399

Chamadas escritas diretamente neste corpo: `Math.max`, `classifyRequestStep`, `recordCompletedSpanIfParented`, `toEpochMs`, `ttfaTrace.runCtx.withName`, `turnPreFirstMessageRequest.histogram`.

SHA-256 do trecho: `1a393544d5e73c2522e1e950e7f3d012611c054e9e62df3d747bf2ee27e0909a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
