# `createSandDurableFileOwner/onDiscard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/durable-file-owner.ts` · [Module README](../../../../modules/shared/durable-file-owner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453474-453481](../../../../../reference/runtime/host-main.cjs#L453474-L453481) | `ArrowFunctionExpression` | no | `{ path: path33, copyPath }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453474-453481](../../../../../reference/runtime/host-main.cjs#L453474-L453481) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453474

Calls written directly in this body: `fileName`, `once2`.

SHA-256 of the source span: `a3de71739f32bb346e3c0ff3e00d2cae4cc2498f65a544d9636ea58e7f4ffad0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
