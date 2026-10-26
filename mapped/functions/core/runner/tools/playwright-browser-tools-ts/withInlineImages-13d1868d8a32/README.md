# `withInlineImages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/playwright-browser-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:750988-751026](../../../../../../../reference/runtime/host-main.cjs#L750988-L751026) | `FunctionDeclaration` | sim | `ctx, result, source` |
| [evaluation:523839-523877](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523839-L523877) | `FunctionDeclaration` | sim | `ctx, result, source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750988-751026](../../../../../../../reference/runtime/host-main.cjs#L750988-L751026) | 7 | 1 | 1 | 3 | 0 | 0 |
| [evaluation:523839-523877](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523839-L523877) | 7 | 1 | 1 | 3 | 0 | 0 |

### host:750988

Chamadas escritas diretamente neste corpo: `attached.content.find`, `boundInlineImageForModel`, `content.push`, `link.content.value.text.replace`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `new Uint8Array`, `readImageSize2`, `scaledImageNote`, `success2.clone`, `success2.content.some`, `successOf`, `withComputerUseSubagentSavedImageSentence`.

Alvos de atribuição ou incremento: `attached.content`, `item.content.value.data`, `item.content.value.mimeType`, `item.content.value.text`, `link.content.value.text`.

SHA-256 do trecho: `414ea5deda90f019a1aaddd9548c6a5d63adc592776e4660af619e93c3ba1443`.

### evaluation:523839

Chamadas escritas diretamente neste corpo: `attached.content.find`, `boundInlineImageForModel`, `content.push`, `link.content.value.text.replace`, `new McpTextContent`, `new McpToolResult`, `new McpToolResultContentItem`, `new Uint8Array`, `readImageSize`, `scaledImageNote`, `success2.clone`, `success2.content.some`, `successOf`, `withComputerUseSubagentSavedImageSentence`.

Alvos de atribuição ou incremento: `attached.content`, `item.content.value.data`, `item.content.value.mimeType`, `item.content.value.text`, `link.content.value.text`.

SHA-256 do trecho: `b661653c86387b6e2a62be256aefb89be5e464253a87705da1e29890adec49d3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
