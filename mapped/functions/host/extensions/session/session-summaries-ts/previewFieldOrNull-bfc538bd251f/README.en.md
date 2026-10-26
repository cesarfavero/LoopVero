# `previewFieldOrNull`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `host/extensions/session/session-summaries.ts` · [Module README](../../../../../../modules/host/extensions/session/session-summaries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722585-722599](../../../../../../../reference/runtime/host-main.cjs#L722585-L722599) | `FunctionDeclaration` | no | `agentId, derive` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722585-722599](../../../../../../../reference/runtime/host-main.cjs#L722585-L722599) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:722585

Calls written directly in this body: `derive`, `errorLogTag`, `reportHostDiagnostic`, `reportedPreviewDegradations.add`, `reportedPreviewDegradations.has`.

SHA-256 of the source span: `56814459e8509888d814d5658a2a9ada9ad0e33d78c8fc28ee868c3174b57e8a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
