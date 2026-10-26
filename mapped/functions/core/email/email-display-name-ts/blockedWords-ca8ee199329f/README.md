# `blockedWords`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/email/email-display-name.ts` · [README do módulo](../../../../../modules/core/email/email-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:715801-715801](../../../../../../reference/runtime/host-main.cjs#L715801-L715801) | `ArrowFunctionExpression` | não | `scope` |
| [evaluation:527470-527470](../../../../../../reference/runtime/sand-eval-runner.cjs#L527470-L527470) | `ArrowFunctionExpression` | não | `scope` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715801-715801](../../../../../../reference/runtime/host-main.cjs#L715801-L715801) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:715801 usa retorno implícito de arrow function.
| [evaluation:527470-527470](../../../../../../reference/runtime/sand-eval-runner.cjs#L527470-L527470) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:527470 usa retorno implícito de arrow function.

### host:715801

Chamadas escritas diretamente neste corpo: `.filter`, `.map`.

SHA-256 do trecho: `32a4853fccfc6de9524b3354136e72248c664fdaee514a0b85a9ab7a42b87a05`.

### evaluation:527470

Chamadas escritas diretamente neste corpo: `.filter`, `.map`.

SHA-256 do trecho: `7d44f26301206283778f593b29ea6ee92ee81d0526d9492cf3ec6ecc2f0ca0d8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
