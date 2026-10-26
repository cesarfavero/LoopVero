# `writeMachineId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-secret-store.ts` · [Module README](../../../../modules/host/host-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454132-454137](../../../../../reference/runtime/host-main.cjs#L454132-L454137) | `FunctionDeclaration` | yes | `path33, noFollowRoot, machineId, io2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454132-454137](../../../../../reference/runtime/host-main.cjs#L454132-L454137) | 0 | 0 | 3 | 0 | 0 | 0 |

### host:454132

Calls written directly in this body: `JSON.stringify`, `io2.open`, `io2.write`, `landed.close`.

SHA-256 of the source span: `72bb10c80ab927cf528492a410babe88f1de5ae723707cfa98974489f6e47b5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
