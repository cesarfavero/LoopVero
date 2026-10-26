# `isCopyOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719260-719263](../../../../../../../reference/runtime/host-main.cjs#L719260-L719263) | `FunctionDeclaration` | no | `name18, entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719260-719263](../../../../../../../reference/runtime/host-main.cjs#L719260-L719263) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719260

Calls written directly in this body: `/^\d+$/.test`, `entry.slice`, `entry.startsWith`.

SHA-256 of the source span: `03f2bfed31a7366726b778ebf6e14b8c35abd7c5443b5e5cf3b0124ef810daa5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
