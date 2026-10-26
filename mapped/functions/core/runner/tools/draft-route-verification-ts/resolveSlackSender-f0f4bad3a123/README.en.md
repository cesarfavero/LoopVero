# `resolveSlackSender`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735397-735415](../../../../../../../reference/runtime/host-main.cjs#L735397-L735415) | `FunctionDeclaration` | yes | `execute, providerIdentifier, cache3` |
| [evaluation:540962-540980](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540962-L540980) | `FunctionDeclaration` | yes | `execute, providerIdentifier, cache3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735397-735415](../../../../../../../reference/runtime/host-main.cjs#L735397-L735415) | 3 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:540962-540980](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540962-L540980) | 3 | 0 | 3 | 4 | 0 | 0 |

### host:735397

Calls written directly in this body: `cache3.read`, `cache3.write`, `execute`, `parseSlackSenderIdentity`, `slackVerificationFailure`.

SHA-256 of the source span: `c07d5df54e24e82deaedda4fd2f07b582068eae70b02be323b5f364393080b58`.

### evaluation:540962

Calls written directly in this body: `cache3.read`, `cache3.write`, `execute`, `parseSlackSenderIdentity`, `slackVerificationFailure`.

SHA-256 of the source span: `c07d5df54e24e82deaedda4fd2f07b582068eae70b02be323b5f364393080b58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
