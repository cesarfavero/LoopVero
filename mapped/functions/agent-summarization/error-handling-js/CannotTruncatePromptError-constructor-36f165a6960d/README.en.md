# `CannotTruncatePromptError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/error-handling.js` · [Module README](../../../../modules/agent-summarization/error-handling-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620202-620209](../../../../../reference/runtime/host-main.cjs#L620202-L620209) | `method` | no | `message, details` |
| [evaluation:304556-304563](../../../../../reference/runtime/sand-eval-runner.cjs#L304556-L304563) | `method` | no | `message, details` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620202-620209](../../../../../reference/runtime/host-main.cjs#L620202-L620209) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:304556-304563](../../../../../reference/runtime/sand-eval-runner.cjs#L304556-L304563) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:620202

Calls written directly in this body: `Object.setPrototypeOf`, `super`.

Assignment or increment targets: `this.budgetChars`, `this.name`, `this.originalChars`, `this.totalMessages`.

SHA-256 of the source span: `39a2e8766587e7b9c9e53f167419c82de6b676fc0edd1bf8d12fde61a348fd06`.

### evaluation:304556

Calls written directly in this body: `Object.setPrototypeOf`, `super`.

Assignment or increment targets: `this.budgetChars`, `this.name`, `this.originalChars`, `this.totalMessages`.

SHA-256 of the source span: `39a2e8766587e7b9c9e53f167419c82de6b676fc0edd1bf8d12fde61a348fd06`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
