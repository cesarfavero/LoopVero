# `build/getSendBlockReason`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/conversation-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769077-769077](../../../../../../../../reference/runtime/host-main.cjs#L769077-L769077) | `ArrowFunctionExpression` | não | `message, deliverTo` |
| [evaluation:564724-564724](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564724-L564724) | `ArrowFunctionExpression` | não | `message, deliverTo` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769077-769077](../../../../../../../../reference/runtime/host-main.cjs#L769077-L769077) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:769077 usa retorno implícito de arrow function.
| [evaluation:564724-564724](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564724-L564724) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:564724 usa retorno implícito de arrow function.

### host:769077

Chamadas escritas diretamente neste corpo: `host.transport.sendMessageBlockReason`.

SHA-256 do trecho: `c640435305ec5f918a68216ede84eae0d2b6f4c8759694e5e5aa6ae650c30e04`.

### evaluation:564724

Chamadas escritas diretamente neste corpo: `host.transport.sendMessageBlockReason`.

SHA-256 do trecho: `c640435305ec5f918a68216ede84eae0d2b6f4c8759694e5e5aa6ae650c30e04`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
