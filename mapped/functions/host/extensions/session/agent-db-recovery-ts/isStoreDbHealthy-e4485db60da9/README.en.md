# `isStoreDbHealthy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-db-recovery.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-db-recovery-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:717835-717842](../../../../../../../reference/runtime/host-main.cjs#L717835-L717842) | `FunctionDeclaration` | no | `db` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:717835-717842](../../../../../../../reference/runtime/host-main.cjs#L717835-L717842) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:717835

Calls written directly in this body: `.get`, `db.prepare`.

SHA-256 of the source span: `58e9333e92d89071eaa0c79ff1752eda1d3774a1458e95e187d22d61f8d9deec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
