# `profileDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/split-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771839-771842](../../../../../../../../reference/runtime/host-main.cjs#L771839-L771842) | `FunctionDeclaration` | no | `teamBot` |
| [evaluation:571072-571075](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571072-L571075) | `FunctionDeclaration` | no | `teamBot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771839-771842](../../../../../../../../reference/runtime/host-main.cjs#L771839-L771842) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571072-571075](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571072-L571075) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771839

Calls written directly in this body: `TEAM_BOT_OWNER_ONLY.replace`.

SHA-256 of the source span: `d4fdc26f58b7893f554bf393eb3d1e401f9ff11e6b2bbe64b089c33c1f0ecf60`.

### evaluation:571072

Calls written directly in this body: `TEAM_BOT_OWNER_ONLY.replace`.

SHA-256 of the source span: `d4fdc26f58b7893f554bf393eb3d1e401f9ff11e6b2bbe64b089c33c1f0ecf60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
