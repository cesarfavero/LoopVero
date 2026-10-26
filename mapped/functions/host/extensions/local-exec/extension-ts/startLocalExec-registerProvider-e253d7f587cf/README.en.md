# `startLocalExec/registerProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/local-exec/extension.ts` · [Module README](../../../../../../modules/host/extensions/local-exec/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682180-682184](../../../../../../../reference/runtime/host-main.cjs#L682180-L682184) | `ArrowFunctionExpression` | no | `send` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682180-682184](../../../../../../../reference/runtime/host-main.cjs#L682180-L682184) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:682180

Calls written directly in this body: `bridge.registerProvider`, `context2.host.events.emit`.

SHA-256 of the source span: `63110583eda5dccb12e3ef9e59169d6c3a50d8b93b99fbfc614a0070658600ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
