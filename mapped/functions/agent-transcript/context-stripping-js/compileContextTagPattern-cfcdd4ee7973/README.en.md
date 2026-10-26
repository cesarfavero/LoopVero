# `compileContextTagPattern`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/context-stripping.js` · [Module README](../../../../modules/agent-transcript/context-stripping-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509488-509490](../../../../../reference/runtime/host-main.cjs#L509488-L509490) | `FunctionDeclaration` | no | `tag` |
| [evaluation:294666-294668](../../../../../reference/runtime/sand-eval-runner.cjs#L294666-L294668) | `FunctionDeclaration` | no | `tag` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509488-509490](../../../../../reference/runtime/host-main.cjs#L509488-L509490) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:294666-294668](../../../../../reference/runtime/sand-eval-runner.cjs#L294666-L294668) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509488

Calls written directly in this body: `new RegExp`.

SHA-256 of the source span: `574d6eaef0e240f663c6f1fec9da11edef86179039df10c3635a4a328b7dd010`.

### evaluation:294666

Calls written directly in this body: `new RegExp`.

SHA-256 of the source span: `574d6eaef0e240f663c6f1fec9da11edef86179039df10c3635a4a328b7dd010`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
