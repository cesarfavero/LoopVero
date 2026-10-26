# `goalClockOnDeactivation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/goal-continuation.js` · [Module README](../../../../modules/agent-core/goal-continuation-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475467-475472](../../../../../reference/runtime/host-main.cjs#L475467-L475472) | `FunctionDeclaration` | no | `goalState, nowMs2` |
| [evaluation:254687-254692](../../../../../reference/runtime/sand-eval-runner.cjs#L254687-L254692) | `FunctionDeclaration` | no | `goalState, nowMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475467-475472](../../../../../reference/runtime/host-main.cjs#L475467-L475472) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254687-254692](../../../../../reference/runtime/sand-eval-runner.cjs#L254687-L254692) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475467

Calls written directly in this body: `BigInt`, `goalElapsedMs`.

SHA-256 of the source span: `369d797e55a2814ee8c9ebfc4f06dba31ba5472fc2fe37a7a15e72609ea78b00`.

### evaluation:254687

Calls written directly in this body: `BigInt`, `goalElapsedMs`.

SHA-256 of the source span: `b50af8aba40670f81469b13451af4d1906747add78f8d5d4f9675320db8568d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
