# `isAutoReviewEnforcing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777029-777031](../../../../../../../reference/runtime/host-main.cjs#L777029-L777031) | `FunctionDeclaration` | no | `autoReview` |
| [evaluation:576674-576676](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576674-L576676) | `FunctionDeclaration` | no | `autoReview` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777029-777031](../../../../../../../reference/runtime/host-main.cjs#L777029-L777031) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576674-576676](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576674-L576676) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777029

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `bb528b65e4d7b6f3b6285f02da830df773ef2be4b7c9ee97b97479d45ae4c227`.

### evaluation:576674

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `bb528b65e4d7b6f3b6285f02da830df773ef2be4b7c9ee97b97479d45ae4c227`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
