# `SandConnectorSecretStore.tighten`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719070-719089](../../../../../../../reference/runtime/host-main.cjs#L719070-L719089) | `method` | no | `entry, seen` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719070-719089](../../../../../../../reference/runtime/host-main.cjs#L719070-L719089) | 3 | 0 | 0 | 2 | 0 | 1 |

### host:719070

Calls written directly in this body: `findSystemErrno`, `reportFallbackUnlessAbsent`, `this.log`.

SHA-256 of the source span: `603d796e002e4e1502e8af772b513239aeb0e76f0a940f86a93fa2f6fb247452`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
