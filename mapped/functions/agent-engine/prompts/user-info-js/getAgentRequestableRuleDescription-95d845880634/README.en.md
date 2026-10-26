# `getAgentRequestableRuleDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639973-639983](../../../../../../reference/runtime/host-main.cjs#L639973-L639983) | `FunctionDeclaration` | no | `rule, ruleDir` |
| [evaluation:430587-430597](../../../../../../reference/runtime/sand-eval-runner.cjs#L430587-L430597) | `FunctionDeclaration` | no | `rule, ruleDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639973-639983](../../../../../../reference/runtime/host-main.cjs#L639973-L639983) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:430587-430597](../../../../../../reference/runtime/sand-eval-runner.cjs#L430587-L430597) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:639973

Calls written directly in this body: `getFirstNonEmptyLine`, `rule.type.type.value.globs.join`.

SHA-256 of the source span: `71f3e1a789f607c36122d0710978fecb3c7041461f5d925548f187d2b8cf09a8`.

### evaluation:430587

Calls written directly in this body: `getFirstNonEmptyLine`, `rule.type.type.value.globs.join`.

SHA-256 of the source span: `71f3e1a789f607c36122d0710978fecb3c7041461f5d925548f187d2b8cf09a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
