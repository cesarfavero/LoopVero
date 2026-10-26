# `shared/node/paths.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../guide/architecture/README.md) · [Índice geral](../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:430777-430832](../../../../../reference/runtime/host-main.cjs#L430777-L430832) |
| evaluation | [evaluation:530388-530442](../../../../../reference/runtime/sand-eval-runner.cjs#L530388-L530442) |
| state-worker | [state-worker:357-364](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L357-L364) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `containWithin` | 2 | [Funcionamento estático](../../../../functions/shared/node/paths-ts/containWithin-2088bc1e9359/README.md) |
| `filePathFromFileUrl` | 2 | [Funcionamento estático](../../../../functions/shared/node/paths-ts/filePathFromFileUrl-0d0dd3b17769/README.md) |
| `isPathWithin` | 2 | [Funcionamento estático](../../../../functions/shared/node/paths-ts/isPathWithin-2345f0bfeb32/README.md) |
| `isPathWithin2` | 1 | [Funcionamento estático](../../../../functions/shared/node/paths-ts/isPathWithin2-5eeffe7dd6ff/README.md) |
| `posixPathFromFileUrl` | 2 | [Funcionamento estático](../../../../functions/shared/node/paths-ts/posixPathFromFileUrl-16fcfa928c5d/README.md) |
| `realpathNearestExisting` | 2 | [Funcionamento estático](../../../../functions/shared/node/paths-ts/realpathNearestExisting-62b118135dd1/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
