# `gatedInAppLinksGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557785-557787](../../../../../../reference/runtime/host-main.cjs#L557785-L557787) | `FunctionDeclaration` | no | `visibility = {}, options2 = {}` |
| [evaluation:546221-546223](../../../../../../reference/runtime/sand-eval-runner.cjs#L546221-L546223) | `FunctionDeclaration` | no | `visibility = {}, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557785-557787](../../../../../../reference/runtime/host-main.cjs#L557785-L557787) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546221-546223](../../../../../../reference/runtime/sand-eval-runner.cjs#L546221-L546223) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557785

Calls written directly in this body: `inAppLinksGuidance`, `legacyInAppLinksGuidance`.

SHA-256 of the source span: `3a430c1ae239a850d891fc6959ebf2c42577eb00af47964f0c6afd836efaa6a3`.

### evaluation:546221

Calls written directly in this body: `inAppLinksGuidance`, `legacyInAppLinksGuidance`.

SHA-256 of the source span: `3a430c1ae239a850d891fc6959ebf2c42577eb00af47964f0c6afd836efaa6a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
