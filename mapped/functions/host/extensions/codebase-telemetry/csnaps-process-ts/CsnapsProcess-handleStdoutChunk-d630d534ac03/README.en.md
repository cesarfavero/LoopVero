# `_CsnapsProcess.handleStdoutChunk`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-process.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-process-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541579-541603](../../../../../../../reference/runtime/host-main.cjs#L541579-L541603) | `method` | no | `chunk` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541579-541603](../../../../../../../reference/runtime/host-main.cjs#L541579-L541603) | 4 | 2 | 0 | 1 | 2 | 1 |

### host:541579

Calls written directly in this body: `new CsnapsProcessError`, `new Set`, `seenResponseIds.add`, `seenResponseIds.has`, `this.fail`, `this.pendingRequests.has`, `this.responseDecoder.decode`, `this.settlePendingRequest`.

Explicit throw targets: `CsnapsProcessError`.

SHA-256 of the source span: `ad5a3216bfb7f037f7e1beb825e144617bfeabb9807381c250fd18b3f4a9ace2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
