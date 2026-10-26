# `buildSandDraftVerificationRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755847-755869](../../../../../../reference/runtime/host-main.cjs#L755847-L755869) | `FunctionDeclaration` | no | `args` |
| [evaluation:541722-541744](../../../../../../reference/runtime/sand-eval-runner.cjs#L541722-L541744) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755847-755869](../../../../../../reference/runtime/host-main.cjs#L755847-L755869) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541722-541744](../../../../../../reference/runtime/sand-eval-runner.cjs#L541722-L541744) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755847

Calls written directly in this body: `.map`, `JSON.parse`, `JSON.stringify`, `Struct.fromJson`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewedDraftReads`.

SHA-256 of the source span: `0d373b2293483476652262522f58f304ce6c976ae44838a0f3f0bc550a915443`.

### evaluation:541722

Calls written directly in this body: `.map`, `JSON.parse`, `JSON.stringify`, `Struct.fromJson`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewedDraftReads`.

SHA-256 of the source span: `0d373b2293483476652262522f58f304ce6c976ae44838a0f3f0bc550a915443`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
