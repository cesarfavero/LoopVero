# `runSandBrowserAutoReviewPreflight/pageChangedAfterReview`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-browser-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699944-699950](../../../../../../reference/runtime/host-main.cjs#L699944-L699950) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:513700-513706](../../../../../../reference/runtime/sand-eval-runner.cjs#L513700-L513706) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699944-699950](../../../../../../reference/runtime/host-main.cjs#L699944-L699950) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513700-513706](../../../../../../reference/runtime/sand-eval-runner.cjs#L513700-L513706) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699944

Chamadas escritas diretamente neste corpo: `controller.reportDisplayRecheckFailed`, `new SandBrowserAutoReviewBlockedError`.

SHA-256 do trecho: `5f665e92b7a9bdc5291341a7b108051ef031691f3d2834227ab30b236ef09fad`.

### evaluation:513700

Chamadas escritas diretamente neste corpo: `controller.reportDisplayRecheckFailed`, `new SandBrowserAutoReviewBlockedError`.

SHA-256 do trecho: `5f665e92b7a9bdc5291341a7b108051ef031691f3d2834227ab30b236ef09fad`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
