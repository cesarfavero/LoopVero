# `truncateGitStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639959-639972](../../../../../../reference/runtime/host-main.cjs#L639959-L639972) | `FunctionDeclaration` | no | `status` |
| [evaluation:430573-430586](../../../../../../reference/runtime/sand-eval-runner.cjs#L430573-L430586) | `FunctionDeclaration` | no | `status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639959-639972](../../../../../../reference/runtime/host-main.cjs#L639959-L639972) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:430573-430586](../../../../../../reference/runtime/sand-eval-runner.cjs#L430573-L430586) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:639959

Calls written directly in this body: `status.slice`, `truncated.lastIndexOf`, `truncated.slice`.

Assignment or increment targets: `truncated`.

SHA-256 of the source span: `4b4e9be102f373a16b27252d961511f2f2529d5a856922aa48c05aba266b09e6`.

### evaluation:430573

Calls written directly in this body: `status.slice`, `truncated.lastIndexOf`, `truncated.slice`.

Assignment or increment targets: `truncated`.

SHA-256 of the source span: `4b4e9be102f373a16b27252d961511f2f2529d5a856922aa48c05aba266b09e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
