# `createTurnPerformanceObservation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-performance.ts` · [README do módulo](../../../../../modules/core/runner/turn-performance-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:547266-548011](../../../../../../reference/runtime/sand-eval-runner.cjs#L547266-L548011) | `FunctionDeclaration` | não | `{   ctx,   harness,   sessionKind = "main",   turnKind = "other",   wake = "none",   templateMemoriesSetup = false,   templateSetupDeferExploration = false,   initiator,   startedAt,   activityStartedAt,   runRole = "other",   prewarm = false,   prewarmRace,   composeTiming,   prewarmGate,   prewarmTrigger,   prewarmArm,   clientPlatform = "unknown",   userTurn = "other",   previousAssistantResponseAt,   userMessageSentAt,   turnStartedAt,   traceMarks,   requestSource,   onFirstRequestStart,   clock = realClock }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:547266-548011](../../../../../../reference/runtime/sand-eval-runner.cjs#L547266-L548011) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:547266

Chamadas escritas diretamente neste corpo: `String`, `classifyTurnSource`, `new Map`.

SHA-256 do trecho: `52889d571762dae63f07ebc340a13011769b3616bfa591a87d465f77c8c00d5e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
