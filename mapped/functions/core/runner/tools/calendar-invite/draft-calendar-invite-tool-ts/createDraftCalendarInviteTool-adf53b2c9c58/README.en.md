# `createDraftCalendarInviteTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/calendar-invite/draft-calendar-invite-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/calendar-invite/draft-calendar-invite-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764037-764103](../../../../../../../../reference/runtime/host-main.cjs#L764037-L764103) | `FunctionDeclaration` | no | `deps` |
| [evaluation:557411-557477](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557411-L557477) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764037-764103](../../../../../../../../reference/runtime/host-main.cjs#L764037-L764103) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557411-557477](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L557411-L557477) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764037

Calls written directly in this body: `advertisedCardTaskIdSchema`, `defineCommunicateTool`.

SHA-256 of the source span: `b6557134e9ab9578cdd75f82ef2adf4110e42a8a2a68ead97590f78ccaf4b60d`.

### evaluation:557411

Calls written directly in this body: `advertisedCardTaskIdSchema`, `defineCommunicateTool`.

SHA-256 of the source span: `93cf2cdda569ac3702853866e4e784c0e32d287d54d9f85defc4e8a4a888d63f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
