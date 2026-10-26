# `createGetMeetingSummaryTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meetings-tools.ts` · [Module README](../../../../../modules/core/meetings/meetings-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773602-773611](../../../../../../reference/runtime/host-main.cjs#L773602-L773611) | `FunctionDeclaration` | no | `deps` |
| [evaluation:572828-572837](../../../../../../reference/runtime/sand-eval-runner.cjs#L572828-L572837) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773602-773611](../../../../../../reference/runtime/host-main.cjs#L773602-L773611) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:572828-572837](../../../../../../reference/runtime/sand-eval-runner.cjs#L572828-L572837) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:773602

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `53824778e3eb85e9df92b31af51fe84def8c027dad9ac887026ed9deb313e1ca`.

### evaluation:572828

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `53824778e3eb85e9df92b31af51fe84def8c027dad9ac887026ed9deb313e1ca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
