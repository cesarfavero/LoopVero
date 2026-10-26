# `UserRulesSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640367-640369](../../../../../../reference/runtime/host-main.cjs#L640367-L640369) | `FunctionDeclaration` | no | `{ userRules, composer2CustomUserRules = [] }` |
| [evaluation:430981-430983](../../../../../../reference/runtime/sand-eval-runner.cjs#L430981-L430983) | `FunctionDeclaration` | no | `{ userRules, composer2CustomUserRules = [] }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640367-640369](../../../../../../reference/runtime/host-main.cjs#L640367-L640369) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430981-430983](../../../../../../reference/runtime/sand-eval-runner.cjs#L430981-L430983) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640367

Calls written directly in this body: `composer2CustomUserRules.map`, `jsxs`, `userRules.map`.

SHA-256 of the source span: `c41eb5462d7755f1e194fef3234ae47f1bddbc3dd86f7cbdfc5adbf6dd30ddfa`.

### evaluation:430981

Calls written directly in this body: `composer2CustomUserRules.map`, `jsxs`, `userRules.map`.

SHA-256 of the source span: `c41eb5462d7755f1e194fef3234ae47f1bddbc3dd86f7cbdfc5adbf6dd30ddfa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
