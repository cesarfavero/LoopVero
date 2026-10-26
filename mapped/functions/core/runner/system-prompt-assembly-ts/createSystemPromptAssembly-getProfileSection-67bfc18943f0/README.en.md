# `createSystemPromptAssembly/getProfileSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/system-prompt-assembly.ts` · [Module README](../../../../../modules/core/runner/system-prompt-assembly-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:552715-552751](../../../../../../reference/runtime/sand-eval-runner.cjs#L552715-L552751) | `FunctionDeclaration` | no | `profile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552715-552751](../../../../../../reference/runtime/sand-eval-runner.cjs#L552715-L552751) | 11 | 0 | 0 | 3 | 0 | 0 |

### evaluation:552715

Calls written directly in this body: `.join`, `deps.gates.agentDescription`, `lines2.push`, `profile.description.trim`, `profile.name.trim`.

SHA-256 of the source span: `94d4a6cf5d0eceed3d3e1f4d9bbb190d793e718f4addb20bf57b83f1b28d5d8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
