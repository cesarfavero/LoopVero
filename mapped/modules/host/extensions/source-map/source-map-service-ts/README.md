# `host/extensions/source-map/source-map-service.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../../guide/architecture/README.md) · [Índice geral](../../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:454368-454428](../../../../../../reference/runtime/host-main.cjs#L454368-L454428) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `SandSourceMap.constructor` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/source-map-service-ts/SandSourceMap-constructor-a95eb76e351a/README.md) |
| `SandSourceMap.getBoxStore` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/source-map-service-ts/SandSourceMap-getBoxStore-ca2dbd1f8152/README.md) |
| `SandSourceMap.getOrCreate` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/source-map-service-ts/SandSourceMap-getOrCreate-5e2b8a4122c2/README.md) |
| `SandSourceMap.getOrCreateBoxStore` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/source-map-service-ts/SandSourceMap-getOrCreateBoxStore-cc94ec012d25/README.md) |
| `SandSourceMap.load` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/source-map-service-ts/SandSourceMap-load-37d116d0576e/README.md) |
| `SandSourceMap.save` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/source-map-service-ts/SandSourceMap-save-a98e765f81eb/README.md) |
| `SandSourceMap.setMode` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/source-map-service-ts/SandSourceMap-setMode-78961e35dfd5/README.md) |
| `getSourceMapPath` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/source-map-service-ts/getSourceMapPath-2802bb918d62/README.md) |
| `parseSourceMap` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/source-map-service-ts/parseSourceMap-eef8b2ec7980/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
