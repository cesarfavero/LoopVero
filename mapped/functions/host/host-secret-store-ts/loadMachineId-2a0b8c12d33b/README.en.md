# `loadMachineId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-secret-store.ts` · [Module README](../../../../modules/host/host-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454086-454101](../../../../../reference/runtime/host-main.cjs#L454086-L454101) | `FunctionDeclaration` | yes | `path33, noFollowRoot, onRefused, io2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454086-454101](../../../../../reference/runtime/host-main.cjs#L454086-L454101) | 3 | 0 | 3 | 2 | 1 | 1 |

### host:454086

Calls written directly in this body: `crypto.randomUUID`, `onRefused`, `readMachineId`, `reportFallback`, `unlinkFinalLink`, `writeMachineId`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `e443e89d9d6555f1e033037424ad953bdf90581cc65cfa8faaf3165569ec3df8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
