# `createDraftToolForTurn/reviewOptions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756093-756103](../../../../../../../reference/runtime/host-main.cjs#L756093-L756103) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:542014-542024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542014-L542024) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756093-756103](../../../../../../../reference/runtime/host-main.cjs#L756093-L756103) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:756093 usa retorno implícito de arrow function.
| [evaluation:542014-542024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542014-L542024) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:542014 usa retorno implícito de arrow function.

### host:756093

Chamadas escritas diretamente neste corpo: `host.getAutoReviewInstructions`, `host.getConversationId`, `turn.getAutoReviewUserInstructions`.

SHA-256 do trecho: `6bec3b1732fac9402d428ca3eed54287761595a0f347ad53238a3cbdf8af38a8`.

### evaluation:542014

Chamadas escritas diretamente neste corpo: `host.getAutoReviewInstructions`, `host.getConversationId`, `turn.getAutoReviewUserInstructions`.

SHA-256 do trecho: `6bec3b1732fac9402d428ca3eed54287761595a0f347ad53238a3cbdf8af38a8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
