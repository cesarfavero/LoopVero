# `isRetryableProviderError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736258-736266](../../../../../../reference/runtime/host-main.cjs#L736258-L736266) | `FunctionDeclaration` | no | `error64` |
| [evaluation:589950-589958](../../../../../../reference/runtime/sand-eval-runner.cjs#L589950-L589958) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736258-736266](../../../../../../reference/runtime/host-main.cjs#L736258-L736266) | 6 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:589950-589958](../../../../../../reference/runtime/sand-eval-runner.cjs#L589950-L589958) | 6 | 0 | 0 | 7 | 0 | 0 |

### host:736258

Calls written directly in this body: `classifyError2`, `classifyInferenceHookTurnFailure`, `hasWrappedHardTerminal`, `isContextOverflowDeadEnd`, `isConversationTooLargeRefusal`, `isProviderContentPolicyBlock`, `new Set`.

SHA-256 of the source span: `bbc7f71b22f07dd61a7a64634b30250bf5a1ac983ec4531fabd0b44abf8fa90a`.

### evaluation:589950

Calls written directly in this body: `classifyError2`, `classifyInferenceHookTurnFailure`, `hasWrappedHardTerminal`, `isContextOverflowDeadEnd`, `isConversationTooLargeRefusal`, `isProviderContentPolicyBlock`, `new Set`.

SHA-256 of the source span: `8e60db78a98b289d0d2c4a86b97c62151c9926f3735cbc28bf939e0a6ffbee57`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
