# `isValidLogShipReceipt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:452936-452938](../../../../../../reference/runtime/host-main.cjs#L452936-L452938) | `FunctionDeclaration` | no | `response, requestSize` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452936-452938](../../../../../../reference/runtime/host-main.cjs#L452936-L452938) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:452936

Calls written directly in this body: `Number.isSafeInteger`.

SHA-256 of the source span: `81be0801db4357b22df29d1573141984d5e3fe05e990b86d2191e2ecb8fc0f2c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
