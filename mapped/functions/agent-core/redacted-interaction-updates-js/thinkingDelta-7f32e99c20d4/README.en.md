# `thinkingDelta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615646-615656](../../../../../reference/runtime/host-main.cjs#L615646-L615656) | `FunctionExpression` | no | `text3, thinkingStyle, messageStartedAtMs` |
| [evaluation:284366-284376](../../../../../reference/runtime/sand-eval-runner.cjs#L284366-L284376) | `FunctionExpression` | no | `text3, thinkingStyle, messageStartedAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615646-615656](../../../../../reference/runtime/host-main.cjs#L615646-L615656) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284366-284376](../../../../../reference/runtime/sand-eval-runner.cjs#L284366-L284376) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615646

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `62a7cefc07896d2061e61eb73af4abcd5021b4b08b6c3d3146e70ae03b607174`.

### evaluation:284366

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `62a7cefc07896d2061e61eb73af4abcd5021b4b08b6c3d3146e70ae03b607174`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
