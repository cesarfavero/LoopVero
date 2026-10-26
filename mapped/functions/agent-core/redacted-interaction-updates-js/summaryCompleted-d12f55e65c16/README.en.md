# `summaryCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615745-615753](../../../../../reference/runtime/host-main.cjs#L615745-L615753) | `FunctionExpression` | no | `privacyMode, hookMessage, failed2` |
| [evaluation:284465-284473](../../../../../reference/runtime/sand-eval-runner.cjs#L284465-L284473) | `FunctionExpression` | no | `privacyMode, hookMessage, failed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615745-615753](../../../../../reference/runtime/host-main.cjs#L615745-L615753) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284465-284473](../../../../../reference/runtime/sand-eval-runner.cjs#L284465-L284473) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615745

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ec50ec40bc114a31b21b80e8526da4ac2600a3037373c576b88fc042d7242ef1`.

### evaluation:284465

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `3c3d28f345129a2d0e93a7d6a407d12ffdd4f37e6adefe809acae663da134ca9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
