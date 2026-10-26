# `_SandAgentRunner.shellWatchHost/setConfirmedUserTurnWatermarkCache`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:594004-594007](../../../../../../reference/runtime/sand-eval-runner.cjs#L594004-L594007) | `ArrowFunctionExpression` | no | `cache3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:594004-594007](../../../../../../reference/runtime/sand-eval-runner.cjs#L594004-L594007) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:594004

Calls written directly in this body: `encodeConfirmedUserTurnWatermark`, `this.confirmedUserTurnWatermarkStore.write`.

Assignment or increment targets: `this.confirmedUserTurnWatermarkCache`.

SHA-256 of the source span: `fbb325b5ed987bec818c809ffa1f2b0ef8b14d45fc0f3e0795b7d3901716d1fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
