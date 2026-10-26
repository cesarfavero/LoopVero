# `describePublish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/sand-team-publish-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/sand-team-publish-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781388-781403](../../../../../../../../reference/runtime/host-main.cjs#L781388-L781403) | `FunctionDeclaration` | no | `outcome, shareUrl` |
| [evaluation:581735-581750](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581735-L581750) | `FunctionDeclaration` | no | `outcome, shareUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781388-781403](../../../../../../../../reference/runtime/host-main.cjs#L781388-L781403) | 7 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:581735-581750](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581735-L581750) | 7 | 0 | 0 | 5 | 0 | 0 |

### host:781388

Calls written directly in this body: `teamBotShareLinkInstruction`.

SHA-256 of the source span: `006582120463751fc80dec510b265917f95838f94e367dd95d690343d421ff8b`.

### evaluation:581735

Calls written directly in this body: `teamBotShareLinkInstruction`.

SHA-256 of the source span: `006582120463751fc80dec510b265917f95838f94e367dd95d690343d421ff8b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
