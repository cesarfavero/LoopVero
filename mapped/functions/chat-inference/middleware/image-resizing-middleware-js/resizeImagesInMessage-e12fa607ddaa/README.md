# `resizeImagesInMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/inference/README.md).

**Módulo:** `chat-inference/middleware/image-resizing-middleware.js` · [README do módulo](../../../../../modules/chat-inference/middleware/image-resizing-middleware-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617489-617667](../../../../../../reference/runtime/host-main.cjs#L617489-L617667) | `FunctionDeclaration` | sim | `{ ctx, message, resizeOptions, checkedImageParts }` |
| [evaluation:286860-287038](../../../../../../reference/runtime/sand-eval-runner.cjs#L286860-L287038) | `FunctionDeclaration` | sim | `{ ctx, message, resizeOptions, checkedImageParts }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617489-617667](../../../../../../reference/runtime/host-main.cjs#L617489-L617667) | 24 | 3 | 3 | 6 | 0 | 3 |
| [evaluation:286860-287038](../../../../../../reference/runtime/sand-eval-runner.cjs#L286860-L287038) | 24 | 3 | 3 | 6 | 0 | 3 |

### host:617489

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `.toString`, `Array.isArray`, `Buffer.byteLength`, `Buffer.from`, `checkedImageParts.set`, `decodeImageDataUrl`, `logger35.error`, `logger35.info`, `modelImageResizeOptions`, `part.image.slice`, `resizeImageBufferIfNeeded`, `updatedContent.push`, `wasImagePartChecked`, `withImageContentSha256`.

Alvos de atribuição ou incremento: `expContentHasUpdates`, `expContentIndex`, `hasUpdates`, `imageBuffer`, `messageHasUpdates`, `originalMimeType`, `originalSize`, `partIndex`, `representation`, `sawDecodedBytes`, `updatedContent[computed]`, `updatedExpContent[computed]`.

SHA-256 do trecho: `de8036b3bb0d28dc432cf7c5b7353ca7093f509ef1d7ebdb726096c7bc1b4131`.

### evaluation:286860

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `.toString`, `Array.isArray`, `Buffer.byteLength`, `Buffer.from`, `checkedImageParts.set`, `decodeImageDataUrl`, `logger10.error`, `logger10.info`, `modelImageResizeOptions`, `part.image.slice`, `resizeImageBufferIfNeeded`, `updatedContent.push`, `wasImagePartChecked`, `withImageContentSha256`.

Alvos de atribuição ou incremento: `expContentHasUpdates`, `expContentIndex`, `hasUpdates`, `imageBuffer`, `messageHasUpdates`, `originalMimeType`, `originalSize`, `partIndex`, `representation`, `sawDecodedBytes`, `updatedContent[computed]`, `updatedExpContent[computed]`.

SHA-256 do trecho: `6f5c348589481c89ab8b0167f452a2f09cfcd06085ed8fa9357b4c3e734a6167`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
