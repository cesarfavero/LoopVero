# `build/liveBrowserHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779108-779118](../../../../../../../../reference/runtime/host-main.cjs#L779108-L779118) | `ArrowFunctionExpression` | yes | `ctx` |
| [evaluation:578842-578852](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578842-L578852) | `ArrowFunctionExpression` | yes | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779108-779118](../../../../../../../../reference/runtime/host-main.cjs#L779108-L779118) | 0 | 0 | 2 | 0 | 0 | 0 |

The occurrence at host:779108 uses an implicit arrow-function return.
| [evaluation:578842-578852](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578842-L578852) | 0 | 0 | 2 | 0 | 0 | 0 |

The occurrence at evaluation:578842 uses an implicit arrow-function return.

### host:779108

Calls written directly in this body: `createSandBrowserOpRunner`, `host.gates.noMarkTargets`, `host.gates.noRuntimeEnable`, `host.resolveBoxId`, `readLivePageHost`, `resolveAgentDisplay`.

SHA-256 of the source span: `6bee8c0b7fdda1aa346a4289e0bdd4c3547996f085c8482f5bde911219ee8e25`.

### evaluation:578842

Calls written directly in this body: `createSandBrowserOpRunner`, `host.gates.noMarkTargets`, `host.gates.noRuntimeEnable`, `host.resolveBoxId`, `readLivePageHost`, `resolveAgentDisplay`.

SHA-256 of the source span: `6bee8c0b7fdda1aa346a4289e0bdd4c3547996f085c8482f5bde911219ee8e25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
