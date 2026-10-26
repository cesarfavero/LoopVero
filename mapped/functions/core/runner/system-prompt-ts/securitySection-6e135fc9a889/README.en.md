# `securitySection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt.ts` · [Module README](../../../../../modules/core/runner/system-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:533052-533068](../../../../../../reference/runtime/sand-eval-runner.cjs#L533052-L533068) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533052-533068](../../../../../../reference/runtime/sand-eval-runner.cjs#L533052-L533068) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:533052

Calls written directly in this body: `creditCardLine`, `namedRiskScopeLine`, `scopedSafetyChecksCopy`, `userProxyIdentityLine`.

SHA-256 of the source span: `edd000899c8652902a248f75fe70dc5f6d1fa627e691f9cd8903af4c4229440a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
