# `dumpCloudAgentTranscript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-transcript-dump.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-transcript-dump-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490334-490350](../../../../../../reference/runtime/sand-eval-runner.cjs#L490334-L490350) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490334-490350](../../../../../../reference/runtime/sand-eval-runner.cjs#L490334-L490350) | 2 | 0 | 2 | 3 | 0 | 0 |

### evaluation:490334

Calls written directly in this body: `.encode`, `args.api.getTranscriptDump`, `args.writeBoxFile`, `cloudAgentTranscriptDumpPath`, `new TextEncoder`.

SHA-256 of the source span: `1ac239721a9a40d720d79f383e0e196f11e99dfcbd63e4a5929894de4562e713`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
