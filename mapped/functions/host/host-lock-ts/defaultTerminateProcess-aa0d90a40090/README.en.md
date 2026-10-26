# `defaultTerminateProcess`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-lock.ts` · [Module README](../../../../modules/host/host-lock-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494217-494222](../../../../../reference/runtime/host-main.cjs#L494217-L494222) | `FunctionDeclaration` | no | `pid, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494217-494222](../../../../../reference/runtime/host-main.cjs#L494217-L494222) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:494217

Calls written directly in this body: `process.kill`.

SHA-256 of the source span: `09f40d2ab225a328412daa650729575f6e81540662381e5969e5bfc21e252b64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
