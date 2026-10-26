# `DraftRefusedError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755218-755221](../../../../../../../reference/runtime/host-main.cjs#L755218-L755221) | `method` | no | `message, category` |
| [evaluation:541098-541101](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541098-L541101) | `method` | no | `message, category` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755218-755221](../../../../../../../reference/runtime/host-main.cjs#L755218-L755221) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:541098-541101](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541098-L541101) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:755218

Calls written directly in this body: `super`.

Assignment or increment targets: `this.category`.

SHA-256 of the source span: `0d067d6c770c9b2b33d04a92d56343129704720f81cab0f738a5286713611599`.

### evaluation:541098

Calls written directly in this body: `super`.

Assignment or increment targets: `this.category`.

SHA-256 of the source span: `0d067d6c770c9b2b33d04a92d56343129704720f81cab0f738a5286713611599`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
