# `turnMessageToString`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:620792-620825](../../../../../reference/runtime/host-main.cjs#L620792-L620825) | `FunctionDeclaration` | no | `redactedMessage, enablePromptSizeGuards` |
| [evaluation:305146-305179](../../../../../reference/runtime/sand-eval-runner.cjs#L305146-L305179) | `FunctionDeclaration` | no | `redactedMessage, enablePromptSizeGuards` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620792-620825](../../../../../reference/runtime/host-main.cjs#L620792-L620825) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:305146-305179](../../../../../reference/runtime/sand-eval-runner.cjs#L305146-L305179) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:620792

Calls written directly in this body: `.join`, `Array.isArray`, `content.map`, `fromRedactedCoreMessage`.

SHA-256 of the source span: `6afcfabde460e6b8f9dce4ae1536bfdca71e59b452d5d7df4822d92fcd3df2ea`.

### evaluation:305146

Calls written directly in this body: `.join`, `Array.isArray`, `content.map`, `fromRedactedCoreMessage`.

SHA-256 of the source span: `6afcfabde460e6b8f9dce4ae1536bfdca71e59b452d5d7df4822d92fcd3df2ea`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
