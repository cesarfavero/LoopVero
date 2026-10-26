# `feedbackRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615826-615855](../../../../../reference/runtime/host-main.cjs#L615826-L615855) | `FunctionExpression` | no | `requestId2, canonicalModelName, privacyMode, categories, categoryGroups = [], copy = {}` |
| [evaluation:284546-284575](../../../../../reference/runtime/sand-eval-runner.cjs#L284546-L284575) | `FunctionExpression` | no | `requestId, canonicalModelName, privacyMode, categories, categoryGroups = [], copy = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615826-615855](../../../../../reference/runtime/host-main.cjs#L615826-L615855) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284546-284575](../../../../../reference/runtime/sand-eval-runner.cjs#L284546-L284575) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615826

Calls written directly in this body: `categories.map`, `categoryGroups.map`.

SHA-256 of the source span: `1837f496a8851433f02215af3f011613d8180832ec82d96e6570f7978e40bf33`.

### evaluation:284546

Calls written directly in this body: `categories.map`, `categoryGroups.map`.

SHA-256 of the source span: `5b68cfa7ef52dcbd2b909934cbc2dd3e8f2274635a3739da7fb9e6c317407734`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
