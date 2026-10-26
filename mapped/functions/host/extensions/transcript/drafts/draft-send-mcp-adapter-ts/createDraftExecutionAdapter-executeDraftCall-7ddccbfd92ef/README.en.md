# `createDraftExecutionAdapter/executeDraftCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/drafts/draft-send-mcp-adapter.ts` · [Module README](../../../../../../../modules/host/extensions/transcript/drafts/draft-send-mcp-adapter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733049-733085](../../../../../../../../reference/runtime/host-main.cjs#L733049-L733085) | `FunctionExpression` | yes | `call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733049-733085](../../../../../../../../reference/runtime/host-main.cjs#L733049-L733085) | 5 | 0 | 2 | 4 | 0 | 1 |

### host:733049

Calls written directly in this body: `baseCtx.with`, `boundDraftCallError`, `describeDraftCallFailure`, `draftCallResultJsonText`, `draftSendDeadline.run`, `errorMessage`, `mcp.createExecutor`, `mcp.resolveNeedsAuthSlot`.

Assignment or increment targets: `failure3`, `resultText`.

SHA-256 of the source span: `08e7ea419d6a654a168c94533fc03f9a0980c7fffd72ec5705eb72db721ea55a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
