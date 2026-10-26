# `GrokBotTemplateStore.delete`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/bot-template-share/grok-bot-template-store.ts` · [Module README](../../../../../../modules/host/extensions/bot-template-share/grok-bot-template-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506266-506268](../../../../../../../reference/runtime/host-main.cjs#L506266-L506268) | `method` | yes | `args, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506266-506268](../../../../../../../reference/runtime/host-main.cjs#L506266-L506268) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:506266

Calls written directly in this body: `this.client.deleteGrokBotTemplate`.

SHA-256 of the source span: `3bd5d9700f99c30fcce2340d23f20ee847b19f3ade7490daa127b60c8eb050b1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
