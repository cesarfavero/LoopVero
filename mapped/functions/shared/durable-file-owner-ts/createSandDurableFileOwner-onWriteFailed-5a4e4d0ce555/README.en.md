# `createSandDurableFileOwner/onWriteFailed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/durable-file-owner.ts` · [Module README](../../../../modules/shared/durable-file-owner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453465-453473](../../../../../reference/runtime/host-main.cjs#L453465-L453473) | `ArrowFunctionExpression` | no | `path33, error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453465-453473](../../../../../reference/runtime/host-main.cjs#L453465-L453473) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453465

Calls written directly in this body: `errorLogTag`, `fileName`, `once2`.

SHA-256 of the source span: `386d25ab8ed55aa88a255e86362f04bb10bd5d74e49e6421b0d64b4f2f998138`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
