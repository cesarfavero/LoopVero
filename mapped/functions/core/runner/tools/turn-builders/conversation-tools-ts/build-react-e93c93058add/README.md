# `build/react`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/conversation-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:769192-769195](../../../../../../../../reference/runtime/host-main.cjs#L769192-L769195) | `ArrowFunctionExpression` | não | `args` |
| [evaluation:564839-564842](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564839-L564842) | `ArrowFunctionExpression` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769192-769195](../../../../../../../../reference/runtime/host-main.cjs#L769192-L769195) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:769192 usa retorno implícito de arrow function.
| [evaluation:564839-564842](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564839-L564842) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:564839 usa retorno implícito de arrow function.

### host:769192

Chamadas escritas diretamente neste corpo: `host.emitUpdate`.

SHA-256 do trecho: `d7a5a79b291e8c2ae5025f15418537e3a35e276cf4466d7b6981c058f0b621f3`.

### evaluation:564839

Chamadas escritas diretamente neste corpo: `host.emitUpdate`.

SHA-256 do trecho: `d7a5a79b291e8c2ae5025f15418537e3a35e276cf4466d7b6981c058f0b621f3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
