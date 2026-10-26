# `start/mint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/extension.ts` · [Module README](../../../../../../modules/host/extensions/auth/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499839-499839](../../../../../../../reference/runtime/host-main.cjs#L499839-L499839) | `ArrowFunctionExpression` | no | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499839-499839](../../../../../../../reference/runtime/host-main.cjs#L499839-L499839) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:499839 uses an implicit arrow-function return.

### host:499839

Calls written directly in this body: `client.mint`.

SHA-256 of the source span: `a8e27419ca45706b594f5e9a8d267c0b38001c48eefe0d9f22e8dbf6e86a2adc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
