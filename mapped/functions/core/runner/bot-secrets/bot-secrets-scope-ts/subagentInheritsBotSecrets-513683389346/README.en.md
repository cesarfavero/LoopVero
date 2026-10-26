# `subagentInheritsBotSecrets`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-secrets/bot-secrets-scope.ts` · [Module README](../../../../../../modules/core/runner/bot-secrets/bot-secrets-scope-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587785-587787](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587785-L587787) | `FunctionDeclaration` | no | `subagentType` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587785-587787](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587785-L587787) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:587785

Calls written directly in this body: `isComputerUseSubagentType`.

SHA-256 of the source span: `89f207581e8c2a328c7ed8f05410bad05418e1b2944505d6e268ac91aca906c8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
