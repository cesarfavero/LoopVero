# `build/onSendMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/box-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779013-779022](../../../../../../../../reference/runtime/host-main.cjs#L779013-L779022) | `ArrowFunctionExpression` | não | `message, timestampMs, boxHandoffStamp` |
| [host:779124-779139](../../../../../../../../reference/runtime/host-main.cjs#L779124-L779139) | `ArrowFunctionExpression` | não | `message, timestampMs, userFormStamp` |
| [evaluation:578747-578756](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578747-L578756) | `ArrowFunctionExpression` | não | `message, timestampMs, boxHandoffStamp` |
| [evaluation:578858-578873](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578858-L578873) | `ArrowFunctionExpression` | não | `message, timestampMs, userFormStamp` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779013-779022](../../../../../../../../reference/runtime/host-main.cjs#L779013-L779022) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:779013 usa retorno implícito de arrow function.
| [host:779124-779139](../../../../../../../../reference/runtime/host-main.cjs#L779124-L779139) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578747-578756](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578747-L578756) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:578747 usa retorno implícito de arrow function.
| [evaluation:578858-578873](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578858-L578873) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:779013

Chamadas escritas diretamente neste corpo: `host.emitUpdate`.

SHA-256 do trecho: `c329c1c4329c6841503c880a8d5327d3250d05254745c8e7cca329f550330149`.

### host:779124

Chamadas escritas diretamente neste corpo: `host.emitUpdate`, `offer.raiseInParent`.

SHA-256 do trecho: `947dac8030fcbef0907431348ca6591bbc8221006e8574d85940eb31e49f170c`.

### evaluation:578747

Chamadas escritas diretamente neste corpo: `host.emitUpdate`.

SHA-256 do trecho: `c329c1c4329c6841503c880a8d5327d3250d05254745c8e7cca329f550330149`.

### evaluation:578858

Chamadas escritas diretamente neste corpo: `host.emitUpdate`, `offer.raiseInParent`.

SHA-256 do trecho: `947dac8030fcbef0907431348ca6591bbc8221006e8574d85940eb31e49f170c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
