# `createChildController/propagate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225264-225264](../../../../../reference/runtime/host-main.cjs#L225264-L225264) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:1752-1752](../../../../../reference/runtime/sand-eval-runner.cjs#L1752-L1752) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225264-225264](../../../../../reference/runtime/host-main.cjs#L225264-L225264) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:225264 usa retorno implícito de arrow function.
| [evaluation:1752-1752](../../../../../reference/runtime/sand-eval-runner.cjs#L1752-L1752) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:1752 usa retorno implícito de arrow function.

### host:225264

Chamadas escritas diretamente neste corpo: `controller.abort`.

SHA-256 do trecho: `a8b4a3a47b050d411f21a08f9ef86a8e1082de2a12e7c07b015efc17fa12ae4b`.

### evaluation:1752

Chamadas escritas diretamente neste corpo: `controller.abort`.

SHA-256 do trecho: `a8b4a3a47b050d411f21a08f9ef86a8e1082de2a12e7c07b015efc17fa12ae4b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
