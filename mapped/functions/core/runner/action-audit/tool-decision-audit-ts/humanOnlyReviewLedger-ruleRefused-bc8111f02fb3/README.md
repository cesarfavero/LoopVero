# `humanOnlyReviewLedger/ruleRefused`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/action-audit/tool-decision-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/tool-decision-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699207-699208](../../../../../../../reference/runtime/host-main.cjs#L699207-L699208) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [host:699213-699213](../../../../../../../reference/runtime/host-main.cjs#L699213-L699213) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:489939-489940](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489939-L489940) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:489945-489945](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489945-L489945) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699207-699208](../../../../../../../reference/runtime/host-main.cjs#L699207-L699208) | 0 | 0 | 0 | 0 | 0 | 0 |
| [host:699213-699213](../../../../../../../reference/runtime/host-main.cjs#L699213-L699213) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:699213 usa retorno implícito de arrow function.
| [evaluation:489939-489940](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489939-L489940) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489945-489945](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489945-L489945) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:489945 usa retorno implícito de arrow function.

### host:699207

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `d8c7ff76b38a6ba1f0dfd0cae507faf3b110de37901ad7d18c725ff3358b6176`.

### host:699213

Chamadas escritas diretamente neste corpo: `audit.decide`.

SHA-256 do trecho: `a85ccf89e7905a851bfc35c736682857d85e6e7501724cc5f01261b477dbd16a`.

### evaluation:489939

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `d8c7ff76b38a6ba1f0dfd0cae507faf3b110de37901ad7d18c725ff3358b6176`.

### evaluation:489945

Chamadas escritas diretamente neste corpo: `audit.decide`.

SHA-256 do trecho: `a85ccf89e7905a851bfc35c736682857d85e6e7501724cc5f01261b477dbd16a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
