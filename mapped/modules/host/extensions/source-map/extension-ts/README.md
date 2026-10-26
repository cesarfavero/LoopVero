# `host/extensions/source-map/extension.ts`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../../../guide/architecture/README.md) · [Índice geral](../../../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:728826-728841](../../../../../../reference/runtime/host-main.cjs#L728826-L728841) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `start` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/extension-ts/start-9e054179ca7c/README.md) |
| `start/report` | 1 | [Funcionamento estático](../../../../../functions/host/extensions/source-map/extension-ts/start-report-42e83b1bacd1/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
