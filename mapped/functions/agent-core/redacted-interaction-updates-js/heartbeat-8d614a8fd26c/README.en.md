# `heartbeat`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615723-615731](../../../../../reference/runtime/host-main.cjs#L615723-L615731) | `FunctionExpression` | no | `privacyMode` |
| [evaluation:284443-284451](../../../../../reference/runtime/sand-eval-runner.cjs#L284443-L284451) | `FunctionExpression` | no | `privacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615723-615731](../../../../../reference/runtime/host-main.cjs#L615723-L615731) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284443-284451](../../../../../reference/runtime/sand-eval-runner.cjs#L284443-L284451) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615723

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f202b13d916bb563c4e9dec922c4c4f5fba4cf5eb913fbb4f22de4349c285129`.

### evaluation:284443

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `f202b13d916bb563c4e9dec922c4c4f5fba4cf5eb913fbb4f22de4349c285129`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
