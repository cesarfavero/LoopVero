# `toolArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:616859-616869](../../../../../reference/runtime/host-main.cjs#L616859-L616869) | `FunctionDeclaration` | no | `args` |
| [evaluation:285399-285409](../../../../../reference/runtime/sand-eval-runner.cjs#L285399-L285409) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616859-616869](../../../../../reference/runtime/host-main.cjs#L616859-L616869) | 2 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:285399-285409](../../../../../reference/runtime/sand-eval-runner.cjs#L285399-L285409) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:616859

Calls written directly in this body: `Array.isArray`, `JSON.parse`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `16ce600b5b7d9838433f06254ed822aba34c461012a50504705c5ad568871c6c`.

### evaluation:285399

Calls written directly in this body: `Array.isArray`, `JSON.parse`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `16ce600b5b7d9838433f06254ed822aba34c461012a50504705c5ad568871c6c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
