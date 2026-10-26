# `withDeviceToolAutoReview/run/autoReview`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/device-local-tools/device-tool-auto-review.ts` · [README do módulo](../../../../../modules/core/device-local-tools/device-tool-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:566238-566271](../../../../../../reference/runtime/sand-eval-runner.cjs#L566238-L566271) | `ArrowFunctionExpression` | sim | `reviewCtx, phone` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566238-566271](../../../../../../reference/runtime/sand-eval-runner.cjs#L566238-L566271) | 5 | 0 | 1 | 6 | 0 | 0 |

### evaluation:566238

Chamadas escritas diretamente neste corpo: `review.assertNoPendingAutoReviewApproval`, `review.options`, `reviewCtx.get`, `reviewOfAllowed`, `reviewOfDenied`, `runSandAutoReviewFlow`, `tools.find`.

SHA-256 do trecho: `72dd25e18acc7c41155f95fff2e771dc0fde4b6975e098d0296e2f22ebcccd21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
