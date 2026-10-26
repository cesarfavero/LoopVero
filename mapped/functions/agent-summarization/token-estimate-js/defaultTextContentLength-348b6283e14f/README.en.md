# `defaultTextContentLength`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/token-estimate.js` · [Module README](../../../../modules/agent-summarization/token-estimate-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620657-620672](../../../../../reference/runtime/host-main.cjs#L620657-L620672) | `FunctionDeclaration` | no | `message` |
| [evaluation:305011-305026](../../../../../reference/runtime/sand-eval-runner.cjs#L305011-L305026) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620657-620672](../../../../../reference/runtime/host-main.cjs#L620657-L620672) | 3 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:305011-305026](../../../../../reference/runtime/sand-eval-runner.cjs#L305011-L305026) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:620657

Calls written directly in this body: `Array.isArray`, `isRedactedString`, `safeLength`.

Assignment or increment targets: `len`.

SHA-256 of the source span: `bb6115a66f8759dc06d9b770a778f9baa82c68db7b1c5d113b33fdc1155ed226`.

### evaluation:305011

Calls written directly in this body: `Array.isArray`, `isRedactedString`, `safeLength`.

Assignment or increment targets: `len`.

SHA-256 of the source span: `bb6115a66f8759dc06d9b770a778f9baa82c68db7b1c5d113b33fdc1155ed226`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
