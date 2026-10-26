# `applySandStateUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-state-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763049-763067](../../../../../../../reference/runtime/host-main.cjs#L763049-L763067) | `FunctionDeclaration` | yes | `args, deps` |
| [evaluation:555659-555677](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555659-L555677) | `FunctionDeclaration` | yes | `args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763049-763067](../../../../../../../reference/runtime/host-main.cjs#L763049-L763067) | 2 | 0 | 1 | 2 | 1 | 0 |
| [evaluation:555659-555677](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555659-L555677) | 2 | 0 | 1 | 2 | 1 | 0 |

### host:763049

Calls written directly in this body: `OPERATIONS[computed].join`, `TEAM_SETUP_CARD_ROUTES.has`, `deps.isTeamSetupUnderway`, `isSandStateRoute`, `new SandToolInputError`, `route`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `732f0ff90383ad46a744092cb508bbced2decbd8016fcc9e6af5fcc628e088a2`.

### evaluation:555659

Calls written directly in this body: `OPERATIONS[computed].join`, `TEAM_SETUP_CARD_ROUTES.has`, `deps.isTeamSetupUnderway`, `isSandStateRoute`, `new SandToolInputError`, `route`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `732f0ff90383ad46a744092cb508bbced2decbd8016fcc9e6af5fcc628e088a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
