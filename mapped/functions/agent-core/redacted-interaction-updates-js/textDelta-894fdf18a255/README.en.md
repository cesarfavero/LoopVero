# `textDelta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615597-615607](../../../../../reference/runtime/host-main.cjs#L615597-L615607) | `FunctionExpression` | no | `text3, messageStartedAtMs` |
| [evaluation:284317-284327](../../../../../reference/runtime/sand-eval-runner.cjs#L284317-L284327) | `FunctionExpression` | no | `text3, messageStartedAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615597-615607](../../../../../reference/runtime/host-main.cjs#L615597-L615607) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284317-284327](../../../../../reference/runtime/sand-eval-runner.cjs#L284317-L284327) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615597

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `554b372defeff7b9ae76600d90ae763b27b7e256314c2f10c0b7ed72b830b223`.

### evaluation:284317

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `554b372defeff7b9ae76600d90ae763b27b7e256314c2f10c0b7ed72b830b223`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
