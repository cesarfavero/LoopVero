# `pruneRestoredOriginCliStoredLogins`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482905-482951](../../../../../../../reference/runtime/host-main.cjs#L482905-L482951) | `FunctionDeclaration` | yes | `targetDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482905-482951](../../../../../../../reference/runtime/host-main.cjs#L482905-L482951) | 2 | 1 | 4 | 1 | 1 | 1 |

### host:482905

Calls written directly in this body: `Promise.all`, `byHome.handle.close`, `descriptorPathOf`, `entry.isDirectory`, `logins.map`, `logins.push`, `new AggregateError`, `new Map`, `openBelowTarget`, `refusals2.values`, `settle3`.

Explicit throw targets: `AggregateError`.

SHA-256 of the source span: `24d6823fca531f6c0f9f575ad0e804196479b07e1c7bf8948a18a9c63661f844`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
