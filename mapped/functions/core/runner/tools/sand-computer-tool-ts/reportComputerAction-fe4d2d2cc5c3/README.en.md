# `reportComputerAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777221-777227](../../../../../../../reference/runtime/host-main.cjs#L777221-L777227) | `FunctionDeclaration` | no | `onComputerAction, sequence` |
| [evaluation:576866-576872](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576866-L576872) | `FunctionDeclaration` | no | `onComputerAction, sequence` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777221-777227](../../../../../../../reference/runtime/host-main.cjs#L777221-L777227) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:576866-576872](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576866-L576872) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:777221

Calls written directly in this body: `onComputerAction`, `toReportedAction`.

SHA-256 of the source span: `7787d5d4a13767b7f63a31697fc756421e5b6d5ea4720f3c338951ff0f8a108c`.

### evaluation:576866

Calls written directly in this body: `onComputerAction`, `toReportedAction`.

SHA-256 of the source span: `7787d5d4a13767b7f63a31697fc756421e5b6d5ea4720f3c338951ff0f8a108c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
