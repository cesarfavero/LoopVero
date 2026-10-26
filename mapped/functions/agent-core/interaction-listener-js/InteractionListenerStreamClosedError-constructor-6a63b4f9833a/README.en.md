# `InteractionListenerStreamClosedError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-listener.js` · [Module README](../../../../modules/agent-core/interaction-listener-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475831-475836](../../../../../reference/runtime/host-main.cjs#L475831-L475836) | `method` | no | `message, options2 = {}` |
| [evaluation:255065-255070](../../../../../reference/runtime/sand-eval-runner.cjs#L255065-L255070) | `method` | no | `message, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475831-475836](../../../../../reference/runtime/host-main.cjs#L475831-L475836) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:255065-255070](../../../../../reference/runtime/sand-eval-runner.cjs#L255065-L255070) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:475831

Calls written directly in this body: `Object.setPrototypeOf`, `super`.

Assignment or increment targets: `this.cause`, `this.name`.

SHA-256 of the source span: `0ca2f83977cc4d431fad1414633f308432482801909fe56bd6c5614f16a44c73`.

### evaluation:255065

Calls written directly in this body: `Object.setPrototypeOf`, `super`.

Assignment or increment targets: `this.cause`, `this.name`.

SHA-256 of the source span: `0ca2f83977cc4d431fad1414633f308432482801909fe56bd6c5614f16a44c73`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
