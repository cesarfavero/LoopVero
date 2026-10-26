# `agent-kv/reference.js`

Mapa do módulo identificado nos arquivos originais. Cada função nomeada possui uma ficha própria, com entradas, chamadas, mutações sintáticas e links de origem.

[Guia funcional](../../../../guide/architecture/README.md) · [Índice geral](../../../README.md)

## Seções de origem

| Artefato | Trecho |
| --- | --- |
| host | [host:616537-616539](../../../../reference/runtime/host-main.cjs#L616537-L616539) |
| host | [host:616562-616729](../../../../reference/runtime/host-main.cjs#L616562-L616729) |
| evaluation | [evaluation:285077-285079](../../../../reference/runtime/sand-eval-runner.cjs#L285077-L285079) |
| evaluation | [evaluation:285102-285269](../../../../reference/runtime/sand-eval-runner.cjs#L285102-L285269) |
| state-worker | [state-worker:21921-21936](../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21921-L21936) |

## Funções nomeadas

| Função ou método | Ocorrências | README |
| --- | ---: | --- |
| `EagerReference.constructor` | 2 | [Funcionamento estático](../../../functions/agent-kv/reference-js/EagerReference-constructor-b574558fcfd4/README.md) |
| `EagerReference.get` | 2 | [Funcionamento estático](../../../functions/agent-kv/reference-js/EagerReference-get-cbee3e632dfd/README.md) |
| `EagerReference.set` | 2 | [Funcionamento estático](../../../functions/agent-kv/reference-js/EagerReference-set-08d8d7af9e86/README.md) |
| `EagerReference.writeToBlobStore` | 2 | [Funcionamento estático](../../../functions/agent-kv/reference-js/EagerReference-writeToBlobStore-4cd0db9236da/README.md) |
| `LazyReference.constructor` | 2 | [Funcionamento estático](../../../functions/agent-kv/reference-js/LazyReference-constructor-71b6519ef143/README.md) |
| `LazyReference.get` | 2 | [Funcionamento estático](../../../functions/agent-kv/reference-js/LazyReference-get-c6c7cff848b9/README.md) |
| `LazyReference.set` | 2 | [Funcionamento estático](../../../functions/agent-kv/reference-js/LazyReference-set-01ac2f58b536/README.md) |
| `LazyReference.writeToBlobStore` | 2 | [Funcionamento estático](../../../functions/agent-kv/reference-js/LazyReference-writeToBlobStore-b844e6b91975/README.md) |
| `getBlobTypeLabel` | 2 | [Funcionamento estático](../../../functions/agent-kv/reference-js/getBlobTypeLabel-298954b40a17/README.md) |

## Escopo

Os módulos seguem marcadores de origem presentes nos bundles. Uma mesma origem pode ter vários trechos, e o host e o executor podem conter implementações diferentes ou apenas declarações. A ficha não reconstitui imports TypeScript, arquivos de desenvolvimento nem configuração de implantação ausentes.
