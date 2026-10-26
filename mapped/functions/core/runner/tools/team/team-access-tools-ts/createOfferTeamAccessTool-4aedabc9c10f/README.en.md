# `createOfferTeamAccessTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/team/team-access-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/team/team-access-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781639-781672](../../../../../../../../reference/runtime/host-main.cjs#L781639-L781672) | `FunctionDeclaration` | no | `deps, { teamCopy } = {}` |
| [evaluation:581986-582019](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581986-L582019) | `FunctionDeclaration` | no | `deps, { teamCopy } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781639-781672](../../../../../../../../reference/runtime/host-main.cjs#L781639-L781672) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581986-582019](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581986-L582019) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:781639

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `73804b7edabf27ffe1a151a06cda80c075b153e346b49644a072ecaf813cb0ff`.

### evaluation:581986

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `73804b7edabf27ffe1a151a06cda80c075b153e346b49644a072ecaf813cb0ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
