# `describeDraftCallFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-connector-results.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732633-732656](../../../../../../../reference/runtime/host-main.cjs#L732633-L732656) | `FunctionDeclaration` | no | `result` |
| [evaluation:540155-540178](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540155-L540178) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732633-732656](../../../../../../../reference/runtime/host-main.cjs#L732633-L732656) | 11 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:540155-540178](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540155-L540178) | 11 | 0 | 0 | 9 | 0 | 0 |

### host:732633

Calls written directly in this body: `.join`, `.trim`, `boundDraftCallError`, `inner.value.content.map`.

SHA-256 of the source span: `9f56537a5880af4d0c9e989c9e8a19e0f087fb5ce874f919eeed0e7f87db6705`.

### evaluation:540155

Calls written directly in this body: `.join`, `.trim`, `boundDraftCallError`, `inner.value.content.map`.

SHA-256 of the source span: `9f56537a5880af4d0c9e989c9e8a19e0f087fb5ce874f919eeed0e7f87db6705`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
