# `SummaryPlaceholderRejectedError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620090-620096](../../../../../reference/runtime/host-main.cjs#L620090-L620096) | `method` | no | `details` |
| [evaluation:304444-304450](../../../../../reference/runtime/sand-eval-runner.cjs#L304444-L304450) | `method` | no | `details` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620090-620096](../../../../../reference/runtime/host-main.cjs#L620090-L620096) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:304444-304450](../../../../../reference/runtime/sand-eval-runner.cjs#L304444-L304450) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:620090

Calls written directly in this body: `Object.setPrototypeOf`, `super`.

Assignment or increment targets: `this.errorKind`, `this.name`, `this.summarizerModelId`.

SHA-256 of the source span: `b35ab1909206f6cc68cb9929ed8d16008d083f4359e8e3963a977f6c3db1ccf0`.

### evaluation:304444

Calls written directly in this body: `Object.setPrototypeOf`, `super`.

Assignment or increment targets: `this.errorKind`, `this.name`, `this.summarizerModelId`.

SHA-256 of the source span: `b35ab1909206f6cc68cb9929ed8d16008d083f4359e8e3963a977f6c3db1ccf0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
