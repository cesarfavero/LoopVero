# `parseCreatedDraftId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732818-732828](../../../../../../../reference/runtime/host-main.cjs#L732818-L732828) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540340-540350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540340-L540350) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732818-732828](../../../../../../../reference/runtime/host-main.cjs#L732818-L732828) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:540340-540350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540340-L540350) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:732818

Calls written directly in this body: `parseDraftConnectorJson`, `resultText.trim`.

SHA-256 of the source span: `74dc0409d704f9a995901f2005e20a70376e9cea0ef7328262482954cd529779`.

### evaluation:540340

Calls written directly in this body: `parseDraftConnectorJson`, `resultText.trim`.

SHA-256 of the source span: `f728ce55adf5633218d09a6fa733dac0bf3d072a47205e0202798d9e6f79e992`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
