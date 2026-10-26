# `normalizationForm`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/teams/sand-teams-reaction-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/teams/sand-teams-reaction-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768305-768313](../../../../../../../../reference/runtime/host-main.cjs#L768305-L768313) | `FunctionDeclaration` | no | `raw` |
| [evaluation:563821-563829](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563821-L563829) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768305-768313](../../../../../../../../reference/runtime/host-main.cjs#L768305-L768313) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:563821-563829](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563821-L563829) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:768305

Calls written directly in this body: `raw.endsWith`, `raw.startsWith`, `raw.toLowerCase`.

SHA-256 of the source span: `3544991c952fb603d1d12a10a31019f657d1ff156aad008d802956c14eaffcf2`.

### evaluation:563821

Calls written directly in this body: `raw.endsWith`, `raw.startsWith`, `raw.toLowerCase`.

SHA-256 of the source span: `3544991c952fb603d1d12a10a31019f657d1ff156aad008d802956c14eaffcf2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
