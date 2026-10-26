# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/extension.ts` · [Module README](../../../../../../modules/host/extensions/attachments/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499175-499183](../../../../../../../reference/runtime/host-main.cjs#L499175-L499183) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499175-499183](../../../../../../../reference/runtime/host-main.cjs#L499175-L499183) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:499175 uses an implicit arrow-function return.

### host:499175

Calls written directly in this body: `createAttachmentsService`.

SHA-256 of the source span: `1a5bc98c255665f77d9325fd91d3a9b832377fac7ff56a6c9e73ddd3226a48ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
