# `start/sweepStrandedCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `host/extensions/local-tool-permission/extension.ts` · [Module README](../../../../../../modules/host/extensions/local-tool-permission/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682227-682227](../../../../../../../reference/runtime/host-main.cjs#L682227-L682227) | `ArrowFunctionExpression` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682227-682227](../../../../../../../reference/runtime/host-main.cjs#L682227-L682227) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:682227 uses an implicit arrow-function return.

### host:682227

Calls written directly in this body: `context2.deps.transcript.widgetResponses.expireAllPendingLocalToolPermissionCards`.

SHA-256 of the source span: `b2987577e4a3e1c0c1869ac252e3c602a3d72c7e2ecd11a6b771108ef776247c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
