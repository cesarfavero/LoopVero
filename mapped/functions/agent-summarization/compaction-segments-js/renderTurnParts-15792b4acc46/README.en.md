# `renderTurnParts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/compaction-segments.js` · [Module README](../../../../modules/agent-summarization/compaction-segments-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617029-617058](../../../../../reference/runtime/host-main.cjs#L617029-L617058) | `FunctionDeclaration` | no | `turn, index, shape2` |
| [evaluation:285569-285598](../../../../../reference/runtime/sand-eval-runner.cjs#L285569-L285598) | `FunctionDeclaration` | no | `turn, index, shape2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617029-617058](../../../../../reference/runtime/host-main.cjs#L617029-L617058) | 7 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:285569-285598](../../../../../reference/runtime/sand-eval-runner.cjs#L285569-L285598) | 7 | 2 | 0 | 1 | 0 | 0 |

### host:617029

Calls written directly in this body: `Object.entries`, `argValuePlain`, `parts.join`, `parts.push`, `shape2`.

SHA-256 of the source span: `31514d4e19013d4f5165270b4d55ab2c9212a5a218dccf7b49c0ff6e5ff35bf0`.

### evaluation:285569

Calls written directly in this body: `Object.entries`, `argValuePlain`, `parts.join`, `parts.push`, `shape2`.

SHA-256 of the source span: `31514d4e19013d4f5165270b4d55ab2c9212a5a218dccf7b49c0ff6e5ff35bf0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
