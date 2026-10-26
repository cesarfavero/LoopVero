# `openingLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640997-641004](../../../../../../reference/runtime/host-main.cjs#L640997-L641004) | `FunctionDeclaration` | no | `options2` |
| [evaluation:431610-431617](../../../../../../reference/runtime/sand-eval-runner.cjs#L431610-L431617) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640997-641004](../../../../../../reference/runtime/host-main.cjs#L640997-L641004) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431610-431617](../../../../../../reference/runtime/sand-eval-runner.cjs#L431610-L431617) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:640997

Calls written directly in this body: `escapeProjectInitDescription`, `escapeProjectName`.

SHA-256 of the source span: `0914fab927db189ab356100fe8e198ca90ec45f70f61477f77cf681c613cc70e`.

### evaluation:431610

Calls written directly in this body: `escapeProjectInitDescription`, `escapeProjectName`.

SHA-256 of the source span: `0914fab927db189ab356100fe8e198ca90ec45f70f61477f77cf681c613cc70e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
