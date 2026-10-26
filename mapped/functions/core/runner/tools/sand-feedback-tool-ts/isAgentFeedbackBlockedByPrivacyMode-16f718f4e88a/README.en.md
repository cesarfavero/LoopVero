# `isAgentFeedbackBlockedByPrivacyMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-feedback-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-feedback-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765480-765491](../../../../../../../reference/runtime/host-main.cjs#L765480-L765491) | `FunctionDeclaration` | no | `privacyMode` |
| [evaluation:558846-558857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558846-L558857) | `FunctionDeclaration` | no | `privacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765480-765491](../../../../../../../reference/runtime/host-main.cjs#L765480-L765491) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:558846-558857](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558846-L558857) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:765480

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `42bd5be9f3a51f450785566b1b3c07a87bf7a73e921d0183f85b1f4fda8ad924`.

### evaluation:558846

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `aa892551ce48e21761ad0b44238e6abef08469ce944f83302d64a9cd54999420`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
