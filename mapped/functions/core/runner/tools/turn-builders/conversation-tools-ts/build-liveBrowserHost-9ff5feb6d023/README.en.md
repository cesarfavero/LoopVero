# `build/liveBrowserHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769422-769432](../../../../../../../../reference/runtime/host-main.cjs#L769422-L769432) | `ArrowFunctionExpression` | yes | `ctx` |
| [evaluation:565069-565079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565069-L565079) | `ArrowFunctionExpression` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769422-769432](../../../../../../../../reference/runtime/host-main.cjs#L769422-L769432) | 0 | 0 | 2 | 0 | 0 | 0 |

The occurrence at host:769422 uses an implicit arrow-function return.
| [evaluation:565069-565079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565069-L565079) | 0 | 0 | 2 | 0 | 0 | 0 |

The occurrence at evaluation:565069 uses an implicit arrow-function return.

### host:769422

Calls written directly in this body: `createSandBrowserOpRunner`, `host.gates.noMarkTargets`, `host.gates.noRuntimeEnable`, `host.resolveBoxId`, `readLivePageHost`, `resolveAgentDisplay`.

SHA-256 of the source span: `5248e74a08ec019d738de9c627812b254c45fd853e3dd0bfba13be1fbc61b377`.

### evaluation:565069

Calls written directly in this body: `createSandBrowserOpRunner`, `host.gates.noMarkTargets`, `host.gates.noRuntimeEnable`, `host.resolveBoxId`, `readLivePageHost`, `resolveAgentDisplay`.

SHA-256 of the source span: `5248e74a08ec019d738de9c627812b254c45fd853e3dd0bfba13be1fbc61b377`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
