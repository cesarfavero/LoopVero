# `LoopbackSandBox.assertFileReadAllowed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/loopback-sand-box.ts` · [Module README](../../../../../modules/host/box/loopback-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679206-679208](../../../../../../reference/runtime/host-main.cjs#L679206-L679208) | `method` | yes | `boxPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679206-679208](../../../../../../reference/runtime/host-main.cjs#L679206-L679208) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:679206

Calls written directly in this body: `assertPathOutsideProtectedRoots`.

SHA-256 of the source span: `e3d4cad4ec0031380e00a31df7e8cf720ee4966667095263ee4bdea9e3c41d35`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
