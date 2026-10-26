# `withoutRunCodeReport`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750735-750792](../../../../../../../reference/runtime/host-main.cjs#L750735-L750792) | `FunctionDeclaration` | não | `result` |
| [evaluation:523586-523643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523586-L523643) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750735-750792](../../../../../../../reference/runtime/host-main.cjs#L750735-L750792) | 6 | 0 | 0 | 5 | 0 | 1 |
| [evaluation:523586-523643](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523586-L523643) | 6 | 0 | 0 | 5 | 0 | 1 |

### host:750735

Chamadas escritas diretamente neste corpo: `JSON.parse`, `blocksJoinedByMcpServer.join`, `isUnknownRecord2`, `item.content.value.text.split`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `pageTextJson`, `reportedBoxImageSha`, `reportedFileChooserSchema.safeParse`, `reportedFileUpload`, `reportedImagesSchema.safeParse`, `reportedRootlessUnavailable`, `reportedSleepSchema.safeParse`, `reportedWorkerIsolation`, `stripped.content.splice`, `success2.clone`, `success2.content.findIndex`, `successOf`.

Alvos de atribuição ou incremento: `parsed2`, `strippedItem.content.value.text`.

SHA-256 do trecho: `5dd40e69f8375b51e5d3e9c120bec8d0ea125e04e7cd909ff03a4dbba04c82af`.

### evaluation:523586

Chamadas escritas diretamente neste corpo: `JSON.parse`, `blocksJoinedByMcpServer.join`, `isUnknownRecord2`, `item.content.value.text.split`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `pageTextJson`, `reportedBoxImageSha`, `reportedFileChooserSchema.safeParse`, `reportedFileUpload`, `reportedImagesSchema.safeParse`, `reportedRootlessUnavailable`, `reportedSleepSchema.safeParse`, `reportedWorkerIsolation`, `stripped.content.splice`, `success2.clone`, `success2.content.findIndex`, `successOf`.

Alvos de atribuição ou incremento: `parsed`, `strippedItem.content.value.text`.

SHA-256 do trecho: `910010e4b1b8611fc15d76c31a83a1add07191f6d366cde6dca7b3ba2718ea6e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
