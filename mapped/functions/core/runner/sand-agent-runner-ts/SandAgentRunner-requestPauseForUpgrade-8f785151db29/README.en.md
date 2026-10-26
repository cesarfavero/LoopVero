# `_SandAgentRunner.requestPauseForUpgrade`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594058-594065](../../../../../../reference/runtime/sand-eval-runner.cjs#L594058-L594065) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594058-594065](../../../../../../reference/runtime/sand-eval-runner.cjs#L594058-L594065) | 0 | 1 | 0 | 0 | 0 | 0 |

### evaluation:594058

Calls written directly in this body: `cancel`, `this.autoReviewController.expireForHostPause`, `this.pauseMcpCallCancellers.clear`, `this.runShell.requestPauseForUpgrade`.

SHA-256 of the source span: `c2f3b1e4359f31e7c2099b06d7d227cbbbba1788a6af8d1d61fe452fe4c98423`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
