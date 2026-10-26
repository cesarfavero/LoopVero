# `isBoxHomeForeignMountPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/durable-file-policy.ts` · [Module README](../../../../modules/host/durable-file-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453703-453705](../../../../../reference/runtime/host-main.cjs#L453703-L453705) | `FunctionDeclaration` | no | `relPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453703-453705](../../../../../reference/runtime/host-main.cjs#L453703-L453705) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453703

Calls written directly in this body: `BOX_HOME_FOREIGN_MOUNT_NAMES.some`.

SHA-256 of the source span: `b8400bb63b4a937326cbfe5caefc4b41a94a0ca6ae43f8275d21c5ae9fb2a718`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
