# `scmToolErrorFromMcpResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-tool-error-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-tool-error-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585765-585776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585765-L585776) | `FunctionDeclaration` | no | `result, emittingServerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585765-585776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585765-L585776) | 3 | 1 | 0 | 3 | 0 | 0 |

### evaluation:585765

Calls written directly in this body: `parseRestMcpScmToolError`.

SHA-256 of the source span: `bfc32c4ff088d303f5b0f4547f07fc81d513f0be9398eec8170d4ac9ac593e6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
