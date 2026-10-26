# `resolveCloudAgentTitleBestEffort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760606-760615](../../../../../../../reference/runtime/host-main.cjs#L760606-L760615) | `FunctionDeclaration` | yes | `ctx, bcId, deps` |
| [evaluation:551421-551430](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551421-L551430) | `FunctionDeclaration` | yes | `ctx, bcId, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760606-760615](../../../../../../../reference/runtime/host-main.cjs#L760606-L760615) | 2 | 0 | 1 | 3 | 0 | 1 |
| [evaluation:551421-551430](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551421-L551430) | 2 | 0 | 1 | 3 | 0 | 1 |

### host:760606

Calls written directly in this body: `deps.resolveCloudAgentTitle`, `title.trim`.

SHA-256 of the source span: `d5654a4528334b9d527dc105139bcadf2e81b1094111653f9a97bfd19db3a9c4`.

### evaluation:551421

Calls written directly in this body: `deps.resolveCloudAgentTitle`, `title.trim`.

SHA-256 of the source span: `d5654a4528334b9d527dc105139bcadf2e81b1094111653f9a97bfd19db3a9c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
