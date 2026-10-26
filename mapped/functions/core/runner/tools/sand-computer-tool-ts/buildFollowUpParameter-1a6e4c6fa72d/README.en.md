# `buildFollowUpParameter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777032-777043](../../../../../../../reference/runtime/host-main.cjs#L777032-L777043) | `FunctionDeclaration` | no | `autoReview` |
| [evaluation:576677-576688](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576677-L576688) | `FunctionDeclaration` | no | `autoReview` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777032-777043](../../../../../../../reference/runtime/host-main.cjs#L777032-L777043) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576677-576688](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576677-L576688) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:777032

Calls written directly in this body: `.describe`, `.max`, `.min`, `.optional`, `.superRefine`, `allowed.join`, `buildComputerActionCoreSchema`, `external_exports2.array`, `isAutoReviewEnforcing`.

SHA-256 of the source span: `d6478ec7ae9f9ca8c7098771fc941842e136c5e230584ec311c37d1f69aa1684`.

### evaluation:576677

Calls written directly in this body: `.describe`, `.max`, `.min`, `.optional`, `.superRefine`, `allowed.join`, `buildComputerActionCoreSchema`, `external_exports3.array`, `isAutoReviewEnforcing`.

SHA-256 of the source span: `7b3a65732f1c7452f91ed6de8b5cb65a038dde5667f1f555b6d8ff758fec43e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
