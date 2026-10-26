# `resolveCloudInstructions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640405-640423](../../../../../../reference/runtime/host-main.cjs#L640405-L640423) | `FunctionDeclaration` | no | `cloudRuleContent, renderedGlobalRuleBodies` |
| [evaluation:431019-431037](../../../../../../reference/runtime/sand-eval-runner.cjs#L431019-L431037) | `FunctionDeclaration` | no | `cloudRuleContent, renderedGlobalRuleBodies` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640405-640423](../../../../../../reference/runtime/host-main.cjs#L640405-L640423) | 4 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:431019-431037](../../../../../../reference/runtime/sand-eval-runner.cjs#L431019-L431037) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:640405

Calls written directly in this body: `.trimStart`, `cloudRuleContent.trim`, `renderedGlobalRuleBodies.some`, `tail.startsWith`, `trimmed.slice`, `trimmed.startsWith`.

SHA-256 of the source span: `a3bf21a91c5c2d815fcaf843f451553a15d687ce3b6a542e7bcda4362fc0083e`.

### evaluation:431019

Calls written directly in this body: `.trimStart`, `cloudRuleContent.trim`, `renderedGlobalRuleBodies.some`, `tail.startsWith`, `trimmed.slice`, `trimmed.startsWith`.

SHA-256 of the source span: `a3bf21a91c5c2d815fcaf843f451553a15d687ce3b6a542e7bcda4362fc0083e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
