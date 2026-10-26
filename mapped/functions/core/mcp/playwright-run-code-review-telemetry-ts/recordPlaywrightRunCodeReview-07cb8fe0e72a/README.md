# `recordPlaywrightRunCodeReview`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-run-code-review-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-run-code-review-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742673-742695](../../../../../../reference/runtime/host-main.cjs#L742673-L742695) | `FunctionDeclaration` | não | `ctx, args` |
| [evaluation:515335-515357](../../../../../../reference/runtime/sand-eval-runner.cjs#L515335-L515357) | `FunctionDeclaration` | não | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742673-742695](../../../../../../reference/runtime/host-main.cjs#L742673-L742695) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515335-515357](../../../../../../reference/runtime/sand-eval-runner.cjs#L515335-L515357) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:742673

Chamadas escritas diretamente neste corpo: `Math.round`, `codeModeLabel`, `isRunCodeReviewMismatch`, `logger118.warn`, `reviews.histogram`, `servedModelLabel`.

SHA-256 do trecho: `fa555e07b049f1149a44d4c625d62be92db031f3cf04f7f87d0bb3b9eeccb55b`.

### evaluation:515335

Chamadas escritas diretamente neste corpo: `Math.round`, `codeModeLabel2`, `isRunCodeReviewMismatch`, `logger91.warn`, `reviews.histogram`, `servedModelLabel`.

SHA-256 do trecho: `68e47e6f1d750b3755a76a5f04a064f52fe09ab452375ca036a9c75ce41cfda9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
