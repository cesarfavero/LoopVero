# `elapsedLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780827-780833](../../../../../../../reference/runtime/host-main.cjs#L780827-L780833) | `FunctionDeclaration` | no | `elapsedMs3` |
| [evaluation:581174-581180](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581174-L581180) | `FunctionDeclaration` | no | `elapsedMs3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780827-780833](../../../../../../../reference/runtime/host-main.cjs#L780827-L780833) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581174-581180](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581174-L581180) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:780827

Calls written directly in this body: `Math.floor`, `Math.max`, `Math.round`.

SHA-256 of the source span: `ba1a095f81115453012e180ccf8238f86e179b6cf2dd1598b0d1c868695b8829`.

### evaluation:581174

Calls written directly in this body: `Math.floor`, `Math.max`, `Math.round`.

SHA-256 of the source span: `ba1a095f81115453012e180ccf8238f86e179b6cf2dd1598b0d1c868695b8829`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
