# `stepStarted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/redacted-interaction-updates.js` · [Module README](../../../../modules/agent-core/redacted-interaction-updates-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:615782-615790](../../../../../reference/runtime/host-main.cjs#L615782-L615790) | `FunctionExpression` | no | `privacyMode, stepId` |
| [evaluation:284502-284510](../../../../../reference/runtime/sand-eval-runner.cjs#L284502-L284510) | `FunctionExpression` | no | `privacyMode, stepId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615782-615790](../../../../../reference/runtime/host-main.cjs#L615782-L615790) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:284502-284510](../../../../../reference/runtime/sand-eval-runner.cjs#L284502-L284510) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:615782

Calls written directly in this body: `BigInt`.

SHA-256 of the source span: `0738693abcb349bef309e58bc33e7ca6466a8ef168fd53528654ef1988edca75`.

### evaluation:284502

Calls written directly in this body: `BigInt`.

SHA-256 of the source span: `0738693abcb349bef309e58bc33e7ca6466a8ef168fd53528654ef1988edca75`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
