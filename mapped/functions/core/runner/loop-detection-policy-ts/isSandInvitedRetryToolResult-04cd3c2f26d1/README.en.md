# `isSandInvitedRetryToolResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/loop-detection-policy.ts` · [Module README](../../../../../modules/core/runner/loop-detection-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483251-483253](../../../../../../reference/runtime/sand-eval-runner.cjs#L483251-L483253) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483251-483253](../../../../../../reference/runtime/sand-eval-runner.cjs#L483251-L483253) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483251

Calls written directly in this body: `INVITED_RETRY_RESULT_SUBSTRINGS.some`.

SHA-256 of the source span: `f4bb28549008ebcb52cbfcd906b905214e4b07801cb8b4d4ebb0087a29e75bb8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
