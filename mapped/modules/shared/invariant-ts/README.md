# `shared/invariant.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../guide/architecture/README.md) · [Índice geral](../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:821-887](../../../../reference/runtime/host-main.cjs#L821-L887) |
| evaluation | [evaluation:474305-474353](../../../../reference/runtime/sand-eval-runner.cjs#L474305-L474353) |
| state-worker | [state-worker:29-77](../../../../reference/runtime/workers/state/agent-store-worker.cjs#L29-L77) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `SandInvariantViolation.constructor` | 2 | [Funcionamento estático](../../../functions/shared/invariant-ts/SandInvariantViolation-constructor-b948c8ea55df/README.md) |
| `failInvariant` | 3 | [Funcionamento estático](../../../functions/shared/invariant-ts/failInvariant-658184cd46af/README.md) |
| `headerOf` | 3 | [Funcionamento estático](../../../functions/shared/invariant-ts/headerOf-4d71a731bdeb/README.md) |
| `installInvariantReporter` | 1 | [Funcionamento estático](../../../functions/shared/invariant-ts/installInvariantReporter-503a239dc56b/README.md) |
| `invariant` | 3 | [Funcionamento estático](../../../functions/shared/invariant-ts/invariant-bb8f3d78f215/README.md) |
| `messagesStripped` | 3 | [Funcionamento estático](../../../functions/shared/invariant-ts/messagesStripped-3a4f5bc7746e/README.md) |
| `src/shared/invariant.ts` | 1 | [Funcionamento estático](../../../functions/shared/invariant-ts/src-shared-invariant-ts-f1a0b34dcd41/README.md) |
| `src/shared/invariant.ts/<class>.constructor` | 1 | [Funcionamento estático](../../../functions/shared/invariant-ts/src-shared-invariant-ts-class-constructor-bfe663fe0471/README.md) |
| `topApplicationFrame` | 3 | [Funcionamento estático](../../../functions/shared/invariant-ts/topApplicationFrame-44ddb4d1305b/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
