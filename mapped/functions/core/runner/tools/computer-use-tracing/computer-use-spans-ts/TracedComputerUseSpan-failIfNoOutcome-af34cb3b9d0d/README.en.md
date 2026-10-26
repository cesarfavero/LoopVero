# `TracedComputerUseSpan.failIfNoOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743006-743008](../../../../../../../../reference/runtime/host-main.cjs#L743006-L743008) | `method` | no | `error64` |
| [evaluation:515857-515859](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515857-L515859) | `method` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743006-743008](../../../../../../../../reference/runtime/host-main.cjs#L743006-L743008) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515857-515859](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515857-L515859) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:743006

Calls written directly in this body: `computerUseSpanOutcomeOf`.

Assignment or increment targets: `this.outcome`.

SHA-256 of the source span: `fca3be001ec8f365049892363508fe2e1a12cab640a2fc0722d070422cf326d9`.

### evaluation:515857

Calls written directly in this body: `computerUseSpanOutcomeOf`.

Assignment or increment targets: `this.outcome`.

SHA-256 of the source span: `6606d4f71224cf2b1f3e7d1aeefa0f596d08cefa31cddcb2c3c2b298143ccea2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
