# `defineCardSurfacing/toUrlSurface`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/cards/card-surfacing.ts` · [README do módulo](../../../../../../modules/core/runner/cards/card-surfacing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763799-763799](../../../../../../../reference/runtime/host-main.cjs#L763799-L763799) | `ArrowFunctionExpression` | sim | `card, context2` |
| [evaluation:557133-557133](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557133-L557133) | `ArrowFunctionExpression` | sim | `card, context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763799-763799](../../../../../../../reference/runtime/host-main.cjs#L763799-L763799) | 1 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:763799 usa retorno implícito de arrow function.
| [evaluation:557133-557133](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557133-L557133) | 1 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em evaluation:557133 usa retorno implícito de arrow function.

### host:763799

Chamadas escritas diretamente neste corpo: `isCardOfType`, `spec.toUrlSurface`.

SHA-256 do trecho: `9a16daee5e0bd045ee3c7072c1ce98f3ae71bb2de6ac397a32e2365fb61be8e1`.

### evaluation:557133

Chamadas escritas diretamente neste corpo: `isCardOfType`, `spec.toUrlSurface`.

SHA-256 do trecho: `9a16daee5e0bd045ee3c7072c1ce98f3ae71bb2de6ac397a32e2365fb61be8e1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
