# `userInfoHasAnyGeneratedCustomUserRules`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640337-640340](../../../../../../reference/runtime/host-main.cjs#L640337-L640340) | `FunctionDeclaration` | no | `content` |
| [evaluation:430951-430954](../../../../../../reference/runtime/sand-eval-runner.cjs#L430951-L430954) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640337-640340](../../../../../../reference/runtime/host-main.cjs#L640337-L640340) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430951-430954](../../../../../../reference/runtime/sand-eval-runner.cjs#L430951-L430954) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640337

Calls written directly in this body: `stripWhitespace`, `stripped.includes`.

SHA-256 of the source span: `877a3e6eb8a494f654236e99ffeba933a8d02e88c37853431ec620dc24bf21df`.

### evaluation:430951

Calls written directly in this body: `stripWhitespace`, `stripped.includes`.

SHA-256 of the source span: `877a3e6eb8a494f654236e99ffeba933a8d02e88c37853431ec620dc24bf21df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
