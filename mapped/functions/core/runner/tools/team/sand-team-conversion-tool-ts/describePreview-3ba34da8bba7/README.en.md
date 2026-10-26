# `describePreview`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/sand-team-conversion-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/sand-team-conversion-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781518-781562](../../../../../../../../reference/runtime/host-main.cjs#L781518-L781562) | `FunctionDeclaration` | no | `preview` |
| [evaluation:581865-581909](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581865-L581909) | `FunctionDeclaration` | no | `preview` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781518-781562](../../../../../../../../reference/runtime/host-main.cjs#L781518-L781562) | 10 | 0 | 0 | 7 | 0 | 0 |
| [evaluation:581865-581909](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581865-L581909) | 10 | 0 | 0 | 7 | 0 | 0 |

### host:781518

Calls written directly in this body: `.join`, `describeOwnMemories`, `holdsNothingToCopy`, `lines2.join`, `lines2.push`, `preview.automations.map`, `preview.carryablePlugins.join`, `preview.state.blockers.map`.

SHA-256 of the source span: `2f76adb004339c62b9b7d3b51db9414bfacc2159afce791b41360207ea31f38d`.

### evaluation:581865

Calls written directly in this body: `.join`, `describeOwnMemories`, `holdsNothingToCopy`, `lines2.join`, `lines2.push`, `preview.automations.map`, `preview.carryablePlugins.join`, `preview.state.blockers.map`.

SHA-256 of the source span: `2f76adb004339c62b9b7d3b51db9414bfacc2159afce791b41360207ea31f38d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
