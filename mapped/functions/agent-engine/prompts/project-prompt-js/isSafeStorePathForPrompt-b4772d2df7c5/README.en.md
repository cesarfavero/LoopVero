# `isSafeStorePathForPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640991-640993](../../../../../../reference/runtime/host-main.cjs#L640991-L640993) | `FunctionDeclaration` | no | `path33` |
| [evaluation:431604-431606](../../../../../../reference/runtime/sand-eval-runner.cjs#L431604-L431606) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640991-640993](../../../../../../reference/runtime/host-main.cjs#L640991-L640993) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431604-431606](../../../../../../reference/runtime/sand-eval-runner.cjs#L431604-L431606) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640991

Calls written directly in this body: `/[<>'\p{Cc}]/u.test`.

SHA-256 of the source span: `7b641f4baf22210a4ddea130e5e1160aaa69ec9af898e9e520650d37e4a8376b`.

### evaluation:431604

Calls written directly in this body: `/[<>'\p{Cc}]/u.test`.

SHA-256 of the source span: `7b641f4baf22210a4ddea130e5e1160aaa69ec9af898e9e520650d37e4a8376b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
