# `describeRunningSubagent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780834-780854](../../../../../../../reference/runtime/host-main.cjs#L780834-L780854) | `FunctionDeclaration` | no | `info2, options2` |
| [evaluation:581181-581201](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581181-L581201) | `FunctionDeclaration` | no | `info2, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780834-780854](../../../../../../../reference/runtime/host-main.cjs#L780834-L780854) | 4 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:581181-581201](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581181-L581201) | 4 | 1 | 0 | 2 | 0 | 0 |

### host:780834

Calls written directly in this body: `elapsedLabel`, `lines2.join`, `lines2.push`.

SHA-256 of the source span: `8d4bf1e8406782c3df3a58e3ed8fefecd1843df14700bbab3a9acc3b9be41d64`.

### evaluation:581181

Calls written directly in this body: `elapsedLabel`, `lines2.join`, `lines2.push`.

SHA-256 of the source span: `8d4bf1e8406782c3df3a58e3ed8fefecd1843df14700bbab3a9acc3b9be41d64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
