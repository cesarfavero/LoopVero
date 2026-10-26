# `sendNeedsManualReview`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-email-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-email-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764650-764657](../../../../../../reference/runtime/host-main.cjs#L764650-L764657) | `FunctionDeclaration` | não | `target` |
| [evaluation:558018-558025](../../../../../../reference/runtime/sand-eval-runner.cjs#L558018-L558025) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764650-764657](../../../../../../reference/runtime/host-main.cjs#L764650-L764657) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:558018-558025](../../../../../../reference/runtime/sand-eval-runner.cjs#L558018-L558025) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:764650

Chamadas escritas diretamente neste corpo: `.map`, `attachmentsNotFullyReviewable`, `diverted.join`, `target.fromInboxEmail.toLowerCase`, `target.replyTo.filter`.

SHA-256 do trecho: `d93c242f650f157fb6305b6c11e9765b9893089bf52e06df34989d3f12371860`.

### evaluation:558018

Chamadas escritas diretamente neste corpo: `.map`, `attachmentsNotFullyReviewable`, `diverted.join`, `target.fromInboxEmail.toLowerCase`, `target.replyTo.filter`.

SHA-256 do trecho: `d93c242f650f157fb6305b6c11e9765b9893089bf52e06df34989d3f12371860`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
