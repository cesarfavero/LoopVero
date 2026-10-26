# `userMessageAppended`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615667-615677](../../../../../reference/runtime/host-main.cjs#L615667-L615677) | `FunctionExpression` | no | `userMessage2` |
| [evaluation:284387-284397](../../../../../reference/runtime/sand-eval-runner.cjs#L284387-L284397) | `FunctionExpression` | no | `userMessage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615667-615677](../../../../../reference/runtime/host-main.cjs#L615667-L615677) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284387-284397](../../../../../reference/runtime/sand-eval-runner.cjs#L284387-L284397) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615667

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `410a42cadded9d19c9710628229dd74926a8fef9e9a0b400bec6825b83987808`.

### evaluation:284387

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `96d1110313010c650541eccb6adf2e5d3a0b1cef5603c0a23a376870d13a51ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
