# `SummarizationHandler.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621452-621468](../../../../../reference/runtime/host-main.cjs#L621452-L621468) | `method` | não | `promptSession, isFallbackToMainModel = false, options2` |
| [evaluation:305806-305822](../../../../../reference/runtime/sand-eval-runner.cjs#L305806-L305822) | `method` | não | `promptSession, isFallbackToMainModel = false, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621452-621468](../../../../../reference/runtime/host-main.cjs#L621452-L621468) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:305806-305822](../../../../../reference/runtime/sand-eval-runner.cjs#L305806-L305822) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:621452

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.alwaysRetryOutputTokenLimit`, `this.deterministicFallbackWindowRatio`, `this.enableDeterministicFallback`, `this.enableReduceInputsRetry`, `this.enableRetryRateLimited`, `this.enableRetryUncategorizedErrors`, `this.isFallbackToMainModel`, `this.maxOutputTokens`, `this.maxPromptChars`, `this.preserveLastUserMessage`, `this.preserveLatestImage`, `this.promptSession`, `this.summaryAfterUnfinishedRequest`, `this.throwOnRetryExhaustion`, `this.useRelaxedSplitIndexGuard`.

SHA-256 do trecho: `96ffd4edbf0f57c7310231f35e8a157475d5bd6b143bde50ada4c51b8a08a072`.

### evaluation:305806

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `this.alwaysRetryOutputTokenLimit`, `this.deterministicFallbackWindowRatio`, `this.enableDeterministicFallback`, `this.enableReduceInputsRetry`, `this.enableRetryRateLimited`, `this.enableRetryUncategorizedErrors`, `this.isFallbackToMainModel`, `this.maxOutputTokens`, `this.maxPromptChars`, `this.preserveLastUserMessage`, `this.preserveLatestImage`, `this.promptSession`, `this.summaryAfterUnfinishedRequest`, `this.throwOnRetryExhaustion`, `this.useRelaxedSplitIndexGuard`.

SHA-256 do trecho: `96ffd4edbf0f57c7310231f35e8a157475d5bd6b143bde50ada4c51b8a08a072`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
