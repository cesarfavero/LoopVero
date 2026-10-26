# `_SandAgentRunner.cancelPauseForUpgrade`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594069-594072](../../../../../../reference/runtime/sand-eval-runner.cjs#L594069-L594072) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594069-594072](../../../../../../reference/runtime/sand-eval-runner.cjs#L594069-L594072) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:594069

Calls written directly in this body: `this.autoReviewController.cancelHostPause`, `this.runShell.cancelPauseForUpgrade`.

SHA-256 of the source span: `6b79483830d106350e9ad3d93bd2542a92135ae37959078d1d065b5f0ef90230`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
