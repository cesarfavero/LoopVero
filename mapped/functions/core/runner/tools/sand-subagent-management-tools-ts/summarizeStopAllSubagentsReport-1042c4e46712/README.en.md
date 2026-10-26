# `summarizeStopAllSubagentsReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781028-781063](../../../../../../../reference/runtime/host-main.cjs#L781028-L781063) | `FunctionDeclaration` | no | `report` |
| [evaluation:581375-581410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581375-L581410) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781028-781063](../../../../../../../reference/runtime/host-main.cjs#L781028-L781063) | 7 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581375-581410](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581375-L581410) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:781028

Calls written directly in this body: `formatDelegatedWorkLines`, `lines2.join`, `lines2.push`, `report.alreadyFinished.map`, `report.failed.map`, `report.stopped.map`.

SHA-256 of the source span: `49b9ec490b0fa98f1a9b6d0d6ea3a8ca6bcf0a38cdeff1ebdf9070da8b45b045`.

### evaluation:581375

Calls written directly in this body: `formatDelegatedWorkLines`, `lines2.join`, `lines2.push`, `report.alreadyFinished.map`, `report.failed.map`, `report.stopped.map`.

SHA-256 of the source span: `49b9ec490b0fa98f1a9b6d0d6ea3a8ca6bcf0a38cdeff1ebdf9070da8b45b045`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
