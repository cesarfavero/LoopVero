# `warnIfPreservedTailShapeInvalid`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/pipeline.js` · [Module README](../../../../modules/agent-summarization/pipeline-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620451-620474](../../../../../reference/runtime/host-main.cjs#L620451-L620474) | `FunctionDeclaration` | no | `ctx, partitioned, options2` |
| [evaluation:304805-304828](../../../../../reference/runtime/sand-eval-runner.cjs#L304805-L304828) | `FunctionDeclaration` | no | `ctx, partitioned, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620451-620474](../../../../../reference/runtime/host-main.cjs#L620451-L620474) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:304805-304828](../../../../../reference/runtime/sand-eval-runner.cjs#L304805-L304828) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:620451

Calls written directly in this body: `logger37.warn`, `tail.findIndex`, `tail.map`.

SHA-256 of the source span: `661507963fa6850e4c81e4bb20f20881c85bca9cd452ab523d304ce902b0c7b5`.

### evaluation:304805

Calls written directly in this body: `logger12.warn`, `tail.findIndex`, `tail.map`.

SHA-256 of the source span: `bc8a9084596bbbd77384086d7d2213f70153c89639ed6a16438c9e1f43a15a4d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
