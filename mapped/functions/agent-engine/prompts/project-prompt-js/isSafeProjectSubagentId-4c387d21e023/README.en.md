# `isSafeProjectSubagentId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640994-640996](../../../../../../reference/runtime/host-main.cjs#L640994-L640996) | `FunctionDeclaration` | no | `value` |
| [evaluation:431607-431609](../../../../../../reference/runtime/sand-eval-runner.cjs#L431607-L431609) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640994-640996](../../../../../../reference/runtime/host-main.cjs#L640994-L640996) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431607-431609](../../../../../../reference/runtime/sand-eval-runner.cjs#L431607-L431609) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640994

Calls written directly in this body: `/^[A-Za-z0-9][A-Za-z0-9._:-]*$/u.test`.

SHA-256 of the source span: `24c97dea2cc60cc133a59c6110da1189f293a0b35b7fb5a3338afe5fec1f4a48`.

### evaluation:431607

Calls written directly in this body: `/^[A-Za-z0-9][A-Za-z0-9._:-]*$/u.test`.

SHA-256 of the source span: `24c97dea2cc60cc133a59c6110da1189f293a0b35b7fb5a3338afe5fec1f4a48`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
