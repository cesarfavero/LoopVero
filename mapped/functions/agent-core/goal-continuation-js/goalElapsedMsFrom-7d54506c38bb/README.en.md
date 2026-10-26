# `goalElapsedMsFrom`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/goal-continuation.js` · [Module README](../../../../modules/agent-core/goal-continuation-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475451-475456](../../../../../reference/runtime/host-main.cjs#L475451-L475456) | `FunctionDeclaration` | no | `accruedMs, accrualAnchorMs, nowMs2` |
| [evaluation:254671-254676](../../../../../reference/runtime/sand-eval-runner.cjs#L254671-L254676) | `FunctionDeclaration` | no | `accruedMs, accrualAnchorMs, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475451-475456](../../../../../reference/runtime/host-main.cjs#L475451-L475456) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:254671-254676](../../../../../reference/runtime/sand-eval-runner.cjs#L254671-L254676) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:475451

Calls written directly in this body: `Math.max`.

SHA-256 of the source span: `5deffa68720830c1a56354b15b0ffe4515bb3cdb5a84ee5a8e44d73e7001dd20`.

### evaluation:254671

Calls written directly in this body: `Math.max`.

SHA-256 of the source span: `31b4c2331917cc0f399ee2ae28b5c26d03ab99161e6325d479ddf482f7e30e2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
