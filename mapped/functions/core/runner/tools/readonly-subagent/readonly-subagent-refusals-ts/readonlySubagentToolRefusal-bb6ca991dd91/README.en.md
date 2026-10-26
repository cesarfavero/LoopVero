# `readonlySubagentToolRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/readonly-subagent/readonly-subagent-refusals.ts` · [Module README](../../../../../../../modules/core/runner/tools/readonly-subagent/readonly-subagent-refusals-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:582544-582551](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582544-L582551) | `FunctionDeclaration` | no | `toolName, listedNames` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582544-582551](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582544-L582551) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582544

Calls written directly in this body: `.filter`, `fallbacks.join`, `listedNames.has`.

SHA-256 of the source span: `eb61cc57c6b4debeaffd180c064c24d075883384c7ed03fe489e12c973ee408d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
