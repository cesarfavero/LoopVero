# `fetchLivePrState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-info-read.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-info-read-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508493-508523](../../../../../../../reference/runtime/host-main.cjs#L508493-L508523) | `FunctionDeclaration` | yes | `client, prUrl, storedState` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508493-508523](../../../../../../../reference/runtime/host-main.cjs#L508493-L508523) | 2 | 0 | 1 | 4 | 0 | 1 |

### host:508493

Calls written directly in this body: `classifyReadFailure`, `client.getPullRequestMergeStatus`, `mapMergeStatusToPrState`, `new GetPullRequestMergeStatusRequest`, `parseMergeableState`.

Assignment or increment targets: `status`.

SHA-256 of the source span: `eb34412c82dac4df1e81315ff19e6c9f01806462673ca9f3ac6ba8c5bfb34f5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
