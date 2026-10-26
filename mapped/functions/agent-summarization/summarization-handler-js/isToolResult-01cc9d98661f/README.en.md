# `isToolResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621302-621311](../../../../../reference/runtime/host-main.cjs#L621302-L621311) | `FunctionDeclaration` | no | `message` |
| [evaluation:305656-305665](../../../../../reference/runtime/sand-eval-runner.cjs#L305656-L305665) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621302-621311](../../../../../reference/runtime/host-main.cjs#L621302-L621311) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:305656-305665](../../../../../reference/runtime/sand-eval-runner.cjs#L305656-L305665) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:621302

Calls written directly in this body: `Array.isArray`, `content.some`.

SHA-256 of the source span: `05a76876adda73e9ea53ecdf824598943edd97cf41744a4d92ebadf5c7803b61`.

### evaluation:305656

Calls written directly in this body: `Array.isArray`, `content.some`.

SHA-256 of the source span: `05a76876adda73e9ea53ecdf824598943edd97cf41744a4d92ebadf5c7803b61`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
