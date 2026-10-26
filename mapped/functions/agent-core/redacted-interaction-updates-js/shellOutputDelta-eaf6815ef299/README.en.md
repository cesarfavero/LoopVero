# `shellOutputDelta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615754-615762](../../../../../reference/runtime/host-main.cjs#L615754-L615762) | `FunctionExpression` | no | `privacyMode, event` |
| [evaluation:284474-284482](../../../../../reference/runtime/sand-eval-runner.cjs#L284474-L284482) | `FunctionExpression` | no | `privacyMode, event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615754-615762](../../../../../reference/runtime/host-main.cjs#L615754-L615762) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284474-284482](../../../../../reference/runtime/sand-eval-runner.cjs#L284474-L284482) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615754

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `3f38c6fe882510fd497f1c366690e996784c6d46e8aa1fd42178efd588735625`.

### evaluation:284474

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `3f38c6fe882510fd497f1c366690e996784c6d46e8aa1fd42178efd588735625`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
