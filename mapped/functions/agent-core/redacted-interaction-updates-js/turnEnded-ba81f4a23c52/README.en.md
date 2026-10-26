# `turnEnded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615763-615781](../../../../../reference/runtime/host-main.cjs#L615763-L615781) | `FunctionExpression` | no | `privacyMode, usage, endedAtMs` |
| [evaluation:284483-284501](../../../../../reference/runtime/sand-eval-runner.cjs#L284483-L284501) | `FunctionExpression` | no | `privacyMode, usage, endedAtMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615763-615781](../../../../../reference/runtime/host-main.cjs#L615763-L615781) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284483-284501](../../../../../reference/runtime/sand-eval-runner.cjs#L284483-L284501) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:615763

Calls written directly in this body: `BigInt`.

SHA-256 of the source span: `c715f28d02a126ab7fd4e19569bd7f13a9b5a311c69b1f618188e21e2bd8cd2a`.

### evaluation:284483

Calls written directly in this body: `BigInt`.

SHA-256 of the source span: `c715f28d02a126ab7fd4e19569bd7f13a9b5a311c69b1f618188e21e2bd8cd2a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
