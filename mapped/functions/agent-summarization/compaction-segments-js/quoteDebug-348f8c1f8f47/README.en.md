# `quoteDebug`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616926-616955](../../../../../reference/runtime/host-main.cjs#L616926-L616955) | `FunctionDeclaration` | no | `text3` |
| [evaluation:285466-285495](../../../../../reference/runtime/sand-eval-runner.cjs#L285466-L285495) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616926-616955](../../../../../reference/runtime/host-main.cjs#L616926-L616955) | 8 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:285466-285495](../../../../../reference/runtime/sand-eval-runner.cjs#L285466-L285495) | 8 | 1 | 0 | 1 | 0 | 0 |

### host:616926

Calls written directly in this body: `ch.codePointAt`, `code.toString`.

Assignment or increment targets: `out`.

SHA-256 of the source span: `6bcc25c9c8525eb94428f11c0bfd540ff595dc44cffc4b34ed435e62b39345bc`.

### evaluation:285466

Calls written directly in this body: `ch.codePointAt`, `code.toString`.

Assignment or increment targets: `out`.

SHA-256 of the source span: `6bcc25c9c8525eb94428f11c0bfd540ff595dc44cffc4b34ed435e62b39345bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
