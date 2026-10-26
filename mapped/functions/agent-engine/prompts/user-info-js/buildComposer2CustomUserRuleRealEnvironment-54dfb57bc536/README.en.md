# `buildComposer2CustomUserRuleRealEnvironment`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640164-640177](../../../../../../reference/runtime/host-main.cjs#L640164-L640177) | `FunctionDeclaration` | no | `{ includeCommandExecutionEnforcement, includeDateAuthority }` |
| [evaluation:430778-430791](../../../../../../reference/runtime/sand-eval-runner.cjs#L430778-L430791) | `FunctionDeclaration` | no | `{ includeCommandExecutionEnforcement, includeDateAuthority }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640164-640177](../../../../../../reference/runtime/host-main.cjs#L640164-L640177) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430778-430791](../../../../../../reference/runtime/sand-eval-runner.cjs#L430778-L430791) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:640164

Calls written directly in this body: `.join`.

SHA-256 of the source span: `9dc60104275086b49729cc5e9ba34f1357f1160164b73fd029648fdf8fe7a8ab`.

### evaluation:430778

Calls written directly in this body: `.join`.

SHA-256 of the source span: `9dc60104275086b49729cc5e9ba34f1357f1160164b73fd029648fdf8fe7a8ab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
