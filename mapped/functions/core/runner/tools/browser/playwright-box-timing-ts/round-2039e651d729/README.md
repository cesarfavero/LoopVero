# `round`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/browser/playwright-box-timing.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:743164-743164](../../../../../../../../reference/runtime/host-main.cjs#L743164-L743164) | `ArrowFunctionExpression` | não | `ms2` |
| [evaluation:516015-516015](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516015-L516015) | `ArrowFunctionExpression` | não | `ms2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743164-743164](../../../../../../../../reference/runtime/host-main.cjs#L743164-L743164) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:743164 usa retorno implícito de arrow function.
| [evaluation:516015-516015](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516015-L516015) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:516015 usa retorno implícito de arrow function.

### host:743164

Chamadas escritas diretamente neste corpo: `Math.round`.

SHA-256 do trecho: `b1b18673394368c950d9ea210513d38df5edc25a12fd98bf20ac6deb3b3c531f`.

### evaluation:516015

Chamadas escritas diretamente neste corpo: `Math.round`.

SHA-256 do trecho: `b1b18673394368c950d9ea210513d38df5edc25a12fd98bf20ac6deb3b3c531f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
