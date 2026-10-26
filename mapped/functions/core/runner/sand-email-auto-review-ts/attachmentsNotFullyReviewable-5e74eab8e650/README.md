# `attachmentsNotFullyReviewable`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-email-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-email-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:764642-764649](../../../../../../reference/runtime/host-main.cjs#L764642-L764649) | `FunctionDeclaration` | não | `target` |
| [evaluation:558010-558017](../../../../../../reference/runtime/sand-eval-runner.cjs#L558010-L558017) | `FunctionDeclaration` | não | `target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764642-764649](../../../../../../reference/runtime/host-main.cjs#L764642-L764649) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:558010-558017](../../../../../../reference/runtime/sand-eval-runner.cjs#L558010-L558017) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:764642

Chamadas escritas diretamente neste corpo: `.join`, `target.attachments.filter`, `unseen.map`.

SHA-256 do trecho: `d366a506dedcb363bd61ca4fc5a4352d6e284579492bf9bae148f48ed77d6dac`.

### evaluation:558010

Chamadas escritas diretamente neste corpo: `.join`, `target.attachments.filter`, `unseen.map`.

SHA-256 do trecho: `d366a506dedcb363bd61ca4fc5a4352d6e284579492bf9bae148f48ed77d6dac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
