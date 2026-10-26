# `scanOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `core/runner/captcha/captcha-telemetry.ts` · [Module README](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:489623-489644](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489623-L489644) | `FunctionDeclaration` | no | `outcome, rawChallenges, rawTokens` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:489623-489644](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489623-L489644) | 5 | 1 | 0 | 3 | 0 | 0 |

### evaluation:489623

Calls written directly in this body: `Array.isArray`, `challenges.push`, `isOneOf3`, `isUnknownRecord2`, `new Set`, `seenChallenges.add`, `seenChallenges.has`, `tokenEntries.filter`.

SHA-256 of the source span: `37e2b74da6b6e08867ae020e925da16cd2516de9ec2721fd4fccfccc8bfff745`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
