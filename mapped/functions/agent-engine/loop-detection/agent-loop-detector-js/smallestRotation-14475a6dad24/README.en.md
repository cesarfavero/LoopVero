# `smallestRotation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:310673-310682](../../../../../../reference/runtime/sand-eval-runner.cjs#L310673-L310682) | `FunctionDeclaration` | no | `keys` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310673-310682](../../../../../../reference/runtime/sand-eval-runner.cjs#L310673-L310682) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:310673

Calls written directly in this body: `keys.slice`, `rotation.findIndex`.

Assignment or increment targets: `best`, `start`.

SHA-256 of the source span: `30ce1b12c4c627e1a9164c6ca33cdf909ab0be6dfa686d19cd4146e54f6ad166`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
