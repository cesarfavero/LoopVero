# `isDriverCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-fill-write-failure.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-fill-write-failure-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724152-724154](../../../../../../../../reference/runtime/host-main.cjs#L724152-L724154) | `FunctionDeclaration` | no | `call` |
| [evaluation:560046-560048](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560046-L560048) | `FunctionDeclaration` | no | `call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724152-724154](../../../../../../../../reference/runtime/host-main.cjs#L724152-L724154) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560046-560048](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560046-L560048) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724152

Calls written directly in this body: `DRIVER_CALLS.has`.

SHA-256 of the source span: `1682d1c32ed9b5483a782e0cd3edd7ed73354d9a10cb18b5baf09c535fe84c38`.

### evaluation:560046

Calls written directly in this body: `DRIVER_CALLS.has`.

SHA-256 of the source span: `1682d1c32ed9b5483a782e0cd3edd7ed73354d9a10cb18b5baf09c535fe84c38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
