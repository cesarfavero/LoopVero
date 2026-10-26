# `formatStopAllSubagentsReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781022-781027](../../../../../../../reference/runtime/host-main.cjs#L781022-L781027) | `FunctionDeclaration` | no | `report, options2` |
| [evaluation:581369-581374](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581369-L581374) | `FunctionDeclaration` | no | `report, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781022-781027](../../../../../../../reference/runtime/host-main.cjs#L781022-L781027) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581369-581374](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581369-L581374) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:781022

Calls written directly in this body: `summarizeStopAllSubagentsReport`.

SHA-256 of the source span: `93a59d50176a888654a07dc0e5a5b0da00cab551c1225788de9e3fddb457a813`.

### evaluation:581369

Calls written directly in this body: `summarizeStopAllSubagentsReport`.

SHA-256 of the source span: `93a59d50176a888654a07dc0e5a5b0da00cab551c1225788de9e3fddb457a813`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
