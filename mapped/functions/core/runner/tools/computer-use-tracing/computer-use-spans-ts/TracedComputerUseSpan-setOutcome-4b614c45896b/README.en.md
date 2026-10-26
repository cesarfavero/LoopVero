# `TracedComputerUseSpan.setOutcome`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743002-743005](../../../../../../../../reference/runtime/host-main.cjs#L743002-L743005) | `method` | no | `outcome, options2` |
| [evaluation:515853-515856](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515853-L515856) | `method` | no | `outcome, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743002-743005](../../../../../../../../reference/runtime/host-main.cjs#L743002-L743005) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515853-515856](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515853-L515856) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:743002

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.outcome`, `this.timedOut`.

SHA-256 of the source span: `a02f22eca468f6966044a48bd5a4701b09860b35b6b1eea03dfabbd3ee304f33`.

### evaluation:515853

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.outcome`, `this.timedOut`.

SHA-256 of the source span: `a02f22eca468f6966044a48bd5a4701b09860b35b6b1eea03dfabbd3ee304f33`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
