# `endSpan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [Module README](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742977-742983](../../../../../../../../reference/runtime/host-main.cjs#L742977-L742983) | `FunctionDeclaration` | no | `span, outcome, timedOut, endTime` |
| [evaluation:515828-515834](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515828-L515834) | `FunctionDeclaration` | no | `span, outcome, timedOut, endTime` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742977-742983](../../../../../../../../reference/runtime/host-main.cjs#L742977-L742983) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515828-515834](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515828-L515834) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:742977

Calls written directly in this body: `span.end`, `span.setAttributes`, `span.setStatus`.

SHA-256 of the source span: `e38fa250e598d9133141c71e04eba083a13dc563d46a5928b5fb1bbc232db009`.

### evaluation:515828

Calls written directly in this body: `span.end`, `span.setAttributes`, `span.setStatus`.

SHA-256 of the source span: `e38fa250e598d9133141c71e04eba083a13dc563d46a5928b5fb1bbc232db009`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
