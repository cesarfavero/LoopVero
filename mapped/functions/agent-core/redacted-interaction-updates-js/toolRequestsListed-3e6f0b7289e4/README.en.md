# `toolRequestsListed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615791-615802](../../../../../reference/runtime/host-main.cjs#L615791-L615802) | `FunctionExpression` | no | `privacyMode, callCount` |
| [evaluation:284511-284522](../../../../../reference/runtime/sand-eval-runner.cjs#L284511-L284522) | `FunctionExpression` | no | `privacyMode, callCount` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615791-615802](../../../../../reference/runtime/host-main.cjs#L615791-L615802) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284511-284522](../../../../../reference/runtime/sand-eval-runner.cjs#L284511-L284522) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615791

Calls written directly in this body: `Math.max`.

SHA-256 of the source span: `a0b15c0110882ddd61a9e96d7c409dec61186b44894c93b453bdf301c880bbdb`.

### evaluation:284511

Calls written directly in this body: `Math.max`.

SHA-256 of the source span: `a0b15c0110882ddd61a9e96d7c409dec61186b44894c93b453bdf301c880bbdb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
