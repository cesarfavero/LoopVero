# `rowTool/<callback>/onPhase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:751192-751216](../../../../../../../reference/runtime/host-main.cjs#L751192-L751216) | `ArrowFunctionExpression` | não | `reviewed` |
| [evaluation:524043-524067](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524043-L524067) | `ArrowFunctionExpression` | não | `reviewed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751192-751216](../../../../../../../reference/runtime/host-main.cjs#L751192-L751216) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:524043-524067](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524043-L524067) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:751192

Chamadas escritas diretamente neste corpo: `observePlaywrightPhaseSafely`, `playwrightPhaseSpanName`, `playwrightPhaseSpanOutcome`, `readOnlyReview.observePhase`, `recordCompletedComputerUseSpan`.

Alvos de atribuição ou incremento: `foregroundReviewMs`, `pageCheck`.

SHA-256 do trecho: `110efbef804fb3cf51af10b9271a50f99ebbe6ff2d0716fac2370bd60dbf16f9`.

### evaluation:524043

Chamadas escritas diretamente neste corpo: `observePlaywrightPhaseSafely`, `playwrightPhaseSpanName`, `playwrightPhaseSpanOutcome`, `readOnlyReview.observePhase`, `recordCompletedComputerUseSpan`.

Alvos de atribuição ou incremento: `foregroundReviewMs`, `pageCheck`.

SHA-256 do trecho: `110efbef804fb3cf51af10b9271a50f99ebbe6ff2d0716fac2370bd60dbf16f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
