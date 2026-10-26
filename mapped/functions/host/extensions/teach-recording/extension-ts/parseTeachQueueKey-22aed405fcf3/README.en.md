# `parseTeachQueueKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/teach-recording/extension.ts` · [Module README](../../../../../../modules/host/extensions/teach-recording/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729587-729597](../../../../../../../reference/runtime/host-main.cjs#L729587-L729597) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729587-729597](../../../../../../../reference/runtime/host-main.cjs#L729587-L729597) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:729587

Calls written directly in this body: `/^[0-9a-f]{64}$/.test`, `Buffer.from`, `JSON.parse`.

SHA-256 of the source span: `f79c1567a5c0898dab1e0aa09847ddd9e6b600d8ec09e37bc6e63f31313a89f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
