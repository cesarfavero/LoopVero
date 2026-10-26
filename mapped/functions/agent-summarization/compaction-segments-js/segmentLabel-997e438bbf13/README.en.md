# `segmentLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616876-616878](../../../../../reference/runtime/host-main.cjs#L616876-L616878) | `FunctionDeclaration` | no | `index` |
| [evaluation:285416-285418](../../../../../reference/runtime/sand-eval-runner.cjs#L285416-L285418) | `FunctionDeclaration` | no | `index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616876-616878](../../../../../reference/runtime/host-main.cjs#L616876-L616878) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285416-285418](../../../../../reference/runtime/sand-eval-runner.cjs#L285416-L285418) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:616876

Calls written directly in this body: `.padStart`, `String`.

SHA-256 of the source span: `59d47878cc6bca93c5c2bf763a81f9305e6a8567b50e4e025927766432a9e955`.

### evaluation:285416

Calls written directly in this body: `.padStart`, `String`.

SHA-256 of the source span: `59d47878cc6bca93c5c2bf763a81f9305e6a8567b50e4e025927766432a9e955`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
