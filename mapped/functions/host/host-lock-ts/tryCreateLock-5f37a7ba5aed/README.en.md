# `tryCreateLock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-lock.ts` · [Module README](../../../../modules/host/host-lock-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494243-494256](../../../../../reference/runtime/host-main.cjs#L494243-L494256) | `FunctionDeclaration` | no | `path33, pid` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494243-494256](../../../../../reference/runtime/host-main.cjs#L494243-L494256) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:494243

Calls written directly in this body: `String`, `findSystemErrno`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `89fc8719be30c4977511a558b01050cf139241e2665b9e6bf9cf392b538d1a9e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
