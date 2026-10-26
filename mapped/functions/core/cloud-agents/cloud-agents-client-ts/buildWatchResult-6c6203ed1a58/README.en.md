# `buildWatchResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512628-512676](../../../../../../reference/runtime/host-main.cjs#L512628-L512676) | `FunctionDeclaration` | no | `bcId, status, detailed, report, readPortalBaseUrl, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512628-512676](../../../../../../reference/runtime/host-main.cjs#L512628-L512676) | 12 | 0 | 0 | 2 | 0 | 0 |

### host:512628

Calls written directly in this body: `cloudAgentUrl`, `formatDiffStats`, `groupPrs`, `lines2.join`, `lines2.push`, `lines3.join`, `lines3.push`, `quote3`, `report.trim`, `resolveSandLimitError`, `threadPrs.map`, `threadsNewestFirst.filter`.

SHA-256 of the source span: `f8f33931260c49f4e4966971056d604a9b0c61bc39727987567bda9f6665f6f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
