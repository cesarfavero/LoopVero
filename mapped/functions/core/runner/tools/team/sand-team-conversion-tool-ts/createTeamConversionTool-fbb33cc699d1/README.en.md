# `createTeamConversionTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/sand-team-conversion-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/sand-team-conversion-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781597-781622](../../../../../../../../reference/runtime/host-main.cjs#L781597-L781622) | `FunctionDeclaration` | no | `deps` |
| [evaluation:581944-581969](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581944-L581969) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781597-781622](../../../../../../../../reference/runtime/host-main.cjs#L781597-L781622) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581944-581969](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581944-L581969) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:781597

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `bce1b08b254c52dabfd1195093c3ddd0b7954a1902dd654227a29a87368e2368`.

### evaluation:581944

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `bce1b08b254c52dabfd1195093c3ddd0b7954a1902dd654227a29a87368e2368`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
