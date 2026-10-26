# `GrokBotTemplateStore.getVersion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/bot-template-share/grok-bot-template-store.ts` · [Module README](../../../../../../modules/host/extensions/bot-template-share/grok-bot-template-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506196-506254](../../../../../../../reference/runtime/host-main.cjs#L506196-L506254) | `method` | yes | `args, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506196-506254](../../../../../../../reference/runtime/host-main.cjs#L506196-L506254) | 8 | 0 | 3 | 1 | 7 | 3 |

### host:506196

Calls written directly in this body: `Number`, `Number.isFinite`, `details.blobGetUrl.trim`, `fetch`, `new BotTemplateShareBlobDownloadFailed`, `new BotTemplateShareEmptyResponse`, `new BotTemplateShareRecipeInvalid`, `new BotTemplateStoreNotFound`, `new Uint8Array`, `parseBotTemplateRecipe`, `recipe.profile.description.trim`, `response.arrayBuffer`, `this.client.getGrokBotTemplateVersion`, `visibilityOf`.

Assignment or increment targets: `bytes`, `details`.

Explicit throw targets: `BotTemplateShareBlobDownloadFailed`, `BotTemplateShareEmptyResponse`, `BotTemplateShareRecipeInvalid`, `BotTemplateStoreNotFound`, `error64`.

SHA-256 of the source span: `77c1924a3d7cd06aff39ee0efd72d2c7f87b35dc16065249ca5dc849471bc7c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
