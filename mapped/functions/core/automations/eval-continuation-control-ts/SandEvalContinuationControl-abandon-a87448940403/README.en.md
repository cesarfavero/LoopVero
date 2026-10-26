# `SandEvalContinuationControl.abandon`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/eval-continuation-control.ts` · [Module README](../../../../../modules/core/automations/eval-continuation-control-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628639-628642](../../../../../../reference/runtime/sand-eval-runner.cjs#L628639-L628642) | `method` | yes | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628639-628642](../../../../../../reference/runtime/sand-eval-runner.cjs#L628639-L628642) | 0 | 0 | 1 | 1 | 0 | 0 |

### evaluation:628639

Calls written directly in this body: `this.call`, `this.status`.

SHA-256 of the source span: `e0b6be48882a0301fdce4640fddadf7950e39cca7cfc923d24a2067a224f46f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
