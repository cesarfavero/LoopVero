# `GrokBotTemplateStore.getExportPolicy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/bot-template-share/grok-bot-template-store.ts` · [Module README](../../../../../../modules/host/extensions/bot-template-share/grok-bot-template-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506262-506265](../../../../../../../reference/runtime/host-main.cjs#L506262-L506265) | `method` | yes | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506262-506265](../../../../../../../reference/runtime/host-main.cjs#L506262-L506265) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:506262

Calls written directly in this body: `isSandShareBotExportPolicy`, `this.client.getGrokBotTemplateExportPolicy`.

SHA-256 of the source span: `c3bc5d2231523630c24cf11be2f64cfe6967b3db14290d1738d3c7b3f67ec949`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
