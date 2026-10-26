# `createSandDurableFileOwner/onUnsupportedVersion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/durable-file-owner.ts` · [Module README](../../../../modules/shared/durable-file-owner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453457-453464](../../../../../reference/runtime/host-main.cjs#L453457-L453464) | `ArrowFunctionExpression` | no | `{ path: path33, version: version4 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453457-453464](../../../../../reference/runtime/host-main.cjs#L453457-L453464) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453457

Calls written directly in this body: `fileName`, `once2`.

SHA-256 of the source span: `0c1bd2f1a6cefe18a1518be26a4d25e5d9efb5af6bacd76cee0d65e206ace494`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
