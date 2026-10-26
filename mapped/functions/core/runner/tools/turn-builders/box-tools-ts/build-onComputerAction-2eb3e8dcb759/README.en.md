# `build/onComputerAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778877-778880](../../../../../../../../reference/runtime/host-main.cjs#L778877-L778880) | `ArrowFunctionExpression` | no | `action` |
| [evaluation:578611-578614](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578611-L578614) | `ArrowFunctionExpression` | no | `action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778877-778880](../../../../../../../../reference/runtime/host-main.cjs#L778877-L778880) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:778877 uses an implicit arrow-function return.
| [evaluation:578611-578614](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578611-L578614) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:578611 uses an implicit arrow-function return.

### host:778877

Calls written directly in this body: `host.getTranscriptId`, `host.onComputerAction`.

SHA-256 of the source span: `f3a4f9654d2e88ef03a0ad15bbde492d74670d900971df7ebfe31c8e951a4e72`.

### evaluation:578611

Calls written directly in this body: `host.getTranscriptId`, `host.onComputerAction`.

SHA-256 of the source span: `f3a4f9654d2e88ef03a0ad15bbde492d74670d900971df7ebfe31c8e951a4e72`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
