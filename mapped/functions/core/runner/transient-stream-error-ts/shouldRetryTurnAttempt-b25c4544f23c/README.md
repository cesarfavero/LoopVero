# `shouldRetryTurnAttempt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/transient-stream-error.ts` · [README do módulo](../../../../../modules/core/runner/transient-stream-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:590053-590073](../../../../../../reference/runtime/sand-eval-runner.cjs#L590053-L590073) | `FunctionDeclaration` | não | `input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590053-590073](../../../../../../reference/runtime/sand-eval-runner.cjs#L590053-L590073) | 9 | 0 | 0 | 9 | 0 | 0 |

### evaluation:590053

Chamadas escritas diretamente neste corpo: `classifyInferenceHookTurnFailure`, `input2.automationIsRetryable`, `isFirstTokenStallError`, `isModelFallbackRetryError`, `isModelStreamWallClockLimitError`, `isProviderContentPolicyBlock`, `isRetryableProviderError`, `isStreamIdleError`.

SHA-256 do trecho: `a198992e9bd19f4e314f9dab3461ae70168b6a48b3b1861e5797bb920487992d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
