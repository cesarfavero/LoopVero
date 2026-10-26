# `buildSummarizationPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620826-620940](../../../../../reference/runtime/host-main.cjs#L620826-L620940) | `FunctionDeclaration` | não | `ctx, messages2, options2, serialized = messages2.map((m2) => '${m2.role}: ${turnMessageToString(m2, true)}')` |
| [evaluation:305180-305294](../../../../../reference/runtime/sand-eval-runner.cjs#L305180-L305294) | `FunctionDeclaration` | não | `ctx, messages, options2, serialized = messages.map((m2) => '${m2.role}: ${turnMessageToString(m2, true)}')` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620826-620940](../../../../../reference/runtime/host-main.cjs#L620826-L620940) | 9 | 0 | 0 | 2 | 1 | 0 |
| [evaluation:305180-305294](../../../../../reference/runtime/sand-eval-runner.cjs#L305180-L305294) | 9 | 0 | 0 | 2 | 1 | 0 |

### host:620826

Chamadas escritas diretamente neste corpo: `Buffer.byteLength`, `Math.floor`, `formatOmittedMessagesPreamble`, `logger38.info`, `logger38.warn`, `messages2.map`, `new CannotTruncatePromptError`, `resultParts.join`, `serialized.at`, `serialized.join`, `truncatePromptFairly`.

Alvos de atribuição ou incremento: `didByteAdjust`, `oldPromptBudget`, `promptBudget`.

Alvos de lançamento explícito: `CannotTruncatePromptError`.

SHA-256 do trecho: `ae029abed396b02b7a876f1160de37004dc97377449fa351c844580672b5a7fd`.

### evaluation:305180

Chamadas escritas diretamente neste corpo: `Buffer.byteLength`, `Math.floor`, `formatOmittedMessagesPreamble`, `logger13.info`, `logger13.warn`, `messages.map`, `new CannotTruncatePromptError`, `resultParts.join`, `serialized.at`, `serialized.join`, `truncatePromptFairly`.

Alvos de atribuição ou incremento: `didByteAdjust`, `oldPromptBudget`, `promptBudget`.

Alvos de lançamento explícito: `CannotTruncatePromptError`.

SHA-256 do trecho: `67292a8ba941f9392a42e4c854cff587e867df893f2e3b9d1242b7d147772b50`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
