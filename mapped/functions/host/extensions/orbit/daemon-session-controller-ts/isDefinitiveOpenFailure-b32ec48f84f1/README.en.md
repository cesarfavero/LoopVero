# `isDefinitiveOpenFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706200-706203](../../../../../../../reference/runtime/host-main.cjs#L706200-L706203) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706200-706203](../../../../../../../reference/runtime/host-main.cjs#L706200-L706203) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706200

Calls written directly in this body: `ConnectError.from`.

SHA-256 of the source span: `c4f56457656c1b7e4a6d3968891ce822de061dfb91ca919394812cf0d5c7cbad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
