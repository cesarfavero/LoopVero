# `buildSandDraftSendRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-draft-verification-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-draft-verification-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755940-755960](../../../../../../reference/runtime/host-main.cjs#L755940-L755960) | `FunctionDeclaration` | no | `args` |
| [evaluation:541815-541835](../../../../../../reference/runtime/sand-eval-runner.cjs#L541815-L541835) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755940-755960](../../../../../../reference/runtime/host-main.cjs#L755940-L755960) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541815-541835](../../../../../../reference/runtime/sand-eval-runner.cjs#L541815-L541835) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:755940

Calls written directly in this body: `JSON.parse`, `JSON.stringify`, `Struct.fromJson`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewedDestination`.

SHA-256 of the source span: `fda3091542ee81c4f089de4a11c31f4b8b7f35e94eb2d4b62ffcec3d267d9f55`.

### evaluation:541815

Calls written directly in this body: `JSON.parse`, `JSON.stringify`, `Struct.fromJson`, `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewedDestination`.

SHA-256 of the source span: `fda3091542ee81c4f089de4a11c31f4b8b7f35e94eb2d4b62ffcec3d267d9f55`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
