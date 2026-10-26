# `requireTemplate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/bot-template-share/grok-bot-template-store.ts` · [Module README](../../../../../../modules/host/extensions/bot-template-share/grok-bot-template-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506177-506181](../../../../../../../reference/runtime/host-main.cjs#L506177-L506181) | `FunctionDeclaration` | yes | `rpc, call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506177-506181](../../../../../../../reference/runtime/host-main.cjs#L506177-L506181) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:506177

Calls written directly in this body: `call`, `new BotTemplateShareEmptyResponse`, `recordOf`.

Explicit throw targets: `BotTemplateShareEmptyResponse`.

SHA-256 of the source span: `05c6b02a054cfe9c09fdc06d44493ac829972d3299d95d567a38f2b1fe1c6da9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
