# `classifyExpectedTurnFailureErrorDetails`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/failures/turn-failure-classification.ts` · [README do módulo](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736115-736133](../../../../../../../reference/runtime/host-main.cjs#L736115-L736133) | `FunctionDeclaration` | não | `details` |
| [evaluation:589615-589633](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589615-L589633) | `FunctionDeclaration` | não | `details` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736115-736133](../../../../../../../reference/runtime/host-main.cjs#L736115-L736133) | 8 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:589615-589633](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589615-L589633) | 8 | 0 | 0 | 8 | 0 | 0 |

### host:736115

Chamadas escritas diretamente neste corpo: `BILLING_HINTED_RATE_LIMITED_CODES.has`, `RATE_LIMIT_ERROR_CODES.has`, `USAGE_LIMIT_ERROR_CODES.has`, `USAGE_LIMIT_RATE_LIMIT_REASONS.has`, `carriesBillingLimitHint`, `inferenceHookFailureOf`.

SHA-256 do trecho: `b85d69e02ceb89c0c0dd36429ac58d66d2e84bf2f505e8a9c6715dcbba6f0db3`.

### evaluation:589615

Chamadas escritas diretamente neste corpo: `BILLING_HINTED_RATE_LIMITED_CODES.has`, `RATE_LIMIT_ERROR_CODES.has`, `USAGE_LIMIT_ERROR_CODES.has`, `USAGE_LIMIT_RATE_LIMIT_REASONS.has`, `carriesBillingLimitHint`, `inferenceHookFailureOf`.

SHA-256 do trecho: `b85d69e02ceb89c0c0dd36429ac58d66d2e84bf2f505e8a9c6715dcbba6f0db3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
