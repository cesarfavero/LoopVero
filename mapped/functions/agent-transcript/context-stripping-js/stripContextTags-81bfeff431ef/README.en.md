# `stripContextTags`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/transcripts/README.en.md).

**Module:** `agent-transcript/context-stripping.js` · [Module README](../../../../modules/agent-transcript/context-stripping-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509492-509494](../../../../../reference/runtime/host-main.cjs#L509492-L509494) | `FunctionDeclaration` | no | `text3` |
| [evaluation:294670-294672](../../../../../reference/runtime/sand-eval-runner.cjs#L294670-L294672) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509492-509494](../../../../../reference/runtime/host-main.cjs#L509492-L509494) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:294670-294672](../../../../../reference/runtime/sand-eval-runner.cjs#L294670-L294672) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509492

Calls written directly in this body: `stripTags`.

SHA-256 of the source span: `b590116bad4636d47d310b9b7a2916096a9cf20e22dcfa28020cda600622207c`.

### evaluation:294670

Calls written directly in this body: `stripTags`.

SHA-256 of the source span: `b590116bad4636d47d310b9b7a2916096a9cf20e22dcfa28020cda600622207c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
