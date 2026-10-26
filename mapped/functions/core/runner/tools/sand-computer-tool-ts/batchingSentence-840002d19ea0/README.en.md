# `batchingSentence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777044-777046](../../../../../../../reference/runtime/host-main.cjs#L777044-L777046) | `FunctionDeclaration` | no | `autoReview` |
| [evaluation:576689-576691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576689-L576691) | `FunctionDeclaration` | no | `autoReview` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777044-777046](../../../../../../../reference/runtime/host-main.cjs#L777044-L777046) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576689-576691](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576689-L576691) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:777044

Calls written directly in this body: `isAutoReviewEnforcing`.

SHA-256 of the source span: `60379baf2b9b6709172641302fe66a3b6ed9c588ecbc82bbba26de0b0e8bcfb4`.

### evaluation:576689

Calls written directly in this body: `isAutoReviewEnforcing`.

SHA-256 of the source span: `60379baf2b9b6709172641302fe66a3b6ed9c588ecbc82bbba26de0b0e8bcfb4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
