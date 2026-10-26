# `SummarizationHandler.totalRawSerializedCharLength`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/context-compaction/README.en.md).

**Module:** `agent-summarization/summarization-handler.js` · [Module README](../../../../modules/agent-summarization/summarization-handler-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:621786-621792](../../../../../reference/runtime/host-main.cjs#L621786-L621792) | `method` | no | `messages2` |
| [evaluation:306140-306146](../../../../../reference/runtime/sand-eval-runner.cjs#L306140-L306146) | `method` | no | `messages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621786-621792](../../../../../reference/runtime/host-main.cjs#L621786-L621792) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:306140-306146](../../../../../reference/runtime/sand-eval-runner.cjs#L306140-L306146) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:621786

Calls written directly in this body: `turnMessageToString`.

Assignment or increment targets: `total`.

SHA-256 of the source span: `966eaee92c11ab6e2f6421ddf182702ee71e507cf3a193df0f1669172f190e22`.

### evaluation:306140

Calls written directly in this body: `turnMessageToString`.

Assignment or increment targets: `total`.

SHA-256 of the source span: `52e8ae8dfd8cda7f44bae906fcf26928930691811f3bf7b790147465972d45ba`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
