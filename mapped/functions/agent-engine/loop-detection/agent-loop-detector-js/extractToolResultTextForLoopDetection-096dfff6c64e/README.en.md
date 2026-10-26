# `extractToolResultTextForLoopDetection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:310770-310808](../../../../../../reference/runtime/sand-eval-runner.cjs#L310770-L310808) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:310770-310808](../../../../../../reference/runtime/sand-eval-runner.cjs#L310770-L310808) | 12 | 1 | 0 | 6 | 0 | 1 |

### evaluation:310770

Calls written directly in this body: `.slice`, `Array.isArray`, `JSON.stringify`, `String`, `data2.slice`, `imageTokens.slice`, `result.slice`, `text3.slice`.

Assignment or increment targets: `imageTokens`, `text3`.

SHA-256 of the source span: `c1b4e805618db5fa8c9de1e880f508e1105e87e847531da4d0357d75fae88f22`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
