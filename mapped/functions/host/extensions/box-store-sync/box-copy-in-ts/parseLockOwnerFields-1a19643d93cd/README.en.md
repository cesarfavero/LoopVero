# `parseLockOwnerFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483796-483811](../../../../../../../reference/runtime/host-main.cjs#L483796-L483811) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483796-483811](../../../../../../../reference/runtime/host-main.cjs#L483796-L483811) | 4 | 0 | 0 | 2 | 0 | 1 |

### host:483796

Calls written directly in this body: `JSON.parse`, `Symbol`.

Assignment or increment targets: `fields3.sid`, `fields3.uid`, `fields3.windowId`, `parsed2`.

SHA-256 of the source span: `0ec90bd58fece9db26e647954cb0cc83bc006c1092b99562af87f3b4570af45c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
