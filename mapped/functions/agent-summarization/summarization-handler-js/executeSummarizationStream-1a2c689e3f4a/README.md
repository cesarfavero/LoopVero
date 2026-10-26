# `executeSummarizationStream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620714-620783](../../../../../reference/runtime/host-main.cjs#L620714-L620783) | `FunctionDeclaration` | sim | `ctx, promptSession, summaryPrompt, maxOutputTokens` |
| [evaluation:305068-305137](../../../../../reference/runtime/sand-eval-runner.cjs#L305068-L305137) | `FunctionDeclaration` | sim | `ctx, promptSession, summaryPrompt, maxOutputTokens` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620714-620783](../../../../../reference/runtime/host-main.cjs#L620714-L620783) | 5 | 1 | 2 | 1 | 1 | 1 |
| [evaluation:305068-305137](../../../../../reference/runtime/sand-eval-runner.cjs#L305068-L305137) | 5 | 1 | 2 | 1 | 1 | 1 |

### host:620714

Chamadas escritas diretamente neste corpo: `.join`, `Array.isArray`, `assistantMessages.at`, `executor.stream`, `lastAssistantMessage.content.map`, `logger38.warn`, `new Error`, `promptSession.getExecutor`, `response.messages.filter`, `result.extendedUsage.catch`, `result.invocationId.catch`, `result.providerMetadata.catch`, `result.response.catch`, `result.usage.catch`, `text3.trim`.

Alvos de atribuição ou incremento: `inputTokens`, `outputTokens`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `c0a12b3966aab4463952da65a097e0e098681b75362fb2645549edd888ad8e3a`.

### evaluation:305068

Chamadas escritas diretamente neste corpo: `.join`, `Array.isArray`, `assistantMessages.at`, `executor.stream`, `lastAssistantMessage.content.map`, `logger13.warn`, `new Error`, `promptSession.getExecutor`, `response.messages.filter`, `result.extendedUsage.catch`, `result.invocationId.catch`, `result.providerMetadata.catch`, `result.response.catch`, `result.usage.catch`, `text3.trim`.

Alvos de atribuição ou incremento: `inputTokens`, `outputTokens`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `6cc33862c16b27d6aeedd9c79df760c1a1065dc418245cebcde3674e049266d7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
