# `recordOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/bot-template-share/grok-bot-template-store.ts` · [Module README](../../../../../../modules/host/extensions/bot-template-share/grok-bot-template-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506158-506176](../../../../../../../reference/runtime/host-main.cjs#L506158-L506176) | `FunctionDeclaration` | no | `template` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506158-506176](../../../../../../../reference/runtime/host-main.cjs#L506158-L506176) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:506158

Calls written directly in this body: `botTemplatePostcardText`, `parseAgentId`, `protoMillis`, `visibilityOf`.

SHA-256 of the source span: `3caa5320a27c459d2ac12fad67fe65059daa37c880a8c4d8e5fb6ce2d7672dba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
