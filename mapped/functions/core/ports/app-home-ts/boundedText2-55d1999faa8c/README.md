# `boundedText2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/app-home.ts` · [README do módulo](../../../../../modules/core/ports/app-home-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770972-770972](../../../../../../reference/runtime/host-main.cjs#L770972-L770972) | `ArrowFunctionExpression` | não | `max` |
| [evaluation:570078-570078](../../../../../../reference/runtime/sand-eval-runner.cjs#L570078-L570078) | `ArrowFunctionExpression` | não | `max` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770972-770972](../../../../../../reference/runtime/host-main.cjs#L770972-L770972) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:770972 usa retorno implícito de arrow function.
| [evaluation:570078-570078](../../../../../../reference/runtime/sand-eval-runner.cjs#L570078-L570078) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:570078 usa retorno implícito de arrow function.

### host:770972

Chamadas escritas diretamente neste corpo: `.max`, `.min`, `.trim`, `external_exports2.string`.

SHA-256 do trecho: `2d3bbdfd0455c411e8a22438928e2096db6ad4bc232e07c6e2357bbd81e92e19`.

### evaluation:570078

Chamadas escritas diretamente neste corpo: `.max`, `.min`, `.trim`, `external_exports3.string`.

SHA-256 do trecho: `e938b7fef46a62171dc0f4c306ecb486b336e4e48008f231f1af4f77bb2b6c7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
