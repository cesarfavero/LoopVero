# `backgroundShellAsSubagentCompletion`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagent-revival-prompt.ts` · [Module README](../../../../../modules/core/runner/subagent-revival-prompt-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583839-583864](../../../../../../reference/runtime/sand-eval-runner.cjs#L583839-L583864) | `FunctionDeclaration` | no | `completion` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583839-583864](../../../../../../reference/runtime/sand-eval-runner.cjs#L583839-L583864) | 5 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583839

Calls written directly in this body: `.filter`, `.join`, `definedProvenance`.

Assignment or increment targets: `result`.

SHA-256 of the source span: `db9bf46f45db2049ba689cfa70675e6d71230b2f7e96501f015cb89ed650b5ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
