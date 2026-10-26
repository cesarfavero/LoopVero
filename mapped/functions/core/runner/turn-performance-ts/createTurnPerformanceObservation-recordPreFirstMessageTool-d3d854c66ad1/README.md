# `createTurnPerformanceObservation/recordPreFirstMessageTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547364-547398](../../../../../../reference/runtime/sand-eval-runner.cjs#L547364-L547398) | `FunctionDeclaration` | não | `{     harness: harness2,     callId,     step,     startedAt: startedAt2,     endedAt   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547364-547398](../../../../../../reference/runtime/sand-eval-runner.cjs#L547364-L547398) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547364

Chamadas escritas diretamente neste corpo: `Math.max`, `recordCompletedSpanIfParented`, `toEpochMs`, `toolNames.get`, `ttfaTrace.runCtx.withName`, `turnPreFirstMessageTool.histogram`, `updateStateTargets.get`.

SHA-256 do trecho: `f16342dfae9a69b763663b040028875a2b10898576f62ec30a254c146b8ef5ca`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
