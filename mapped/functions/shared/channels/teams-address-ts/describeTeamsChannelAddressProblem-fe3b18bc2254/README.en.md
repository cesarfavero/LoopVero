# `describeTeamsChannelAddressProblem`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/teams-address.ts` · [Module README](../../../../../modules/shared/channels/teams-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754819-754842](../../../../../../reference/runtime/host-main.cjs#L754819-L754842) | `FunctionDeclaration` | no | `address` |
| [evaluation:538171-538194](../../../../../../reference/runtime/sand-eval-runner.cjs#L538171-L538194) | `FunctionDeclaration` | no | `address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754819-754842](../../../../../../reference/runtime/host-main.cjs#L754819-L754842) | 5 | 0 | 0 | 6 | 2 | 2 |
| [evaluation:538171-538194](../../../../../../reference/runtime/sand-eval-runner.cjs#L538171-L538194) | 5 | 0 | 0 | 6 | 2 | 2 |

### host:754819

Calls written directly in this body: `.startsWith`, `address.trim`, `parseChannelAddress`, `parseTeamsChatTarget`, `trimmed.toLowerCase`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `2d91c09d4d61ced1367fbae1cc7a6ae17d89fd7fee06c6f0663c104e714e86e0`.

### evaluation:538171

Calls written directly in this body: `.startsWith`, `address.trim`, `parseChannelAddress`, `parseTeamsChatTarget`, `trimmed.toLowerCase`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `b4432197cfc2f0d4e66c6052f40677713576d5bb9cfa1c663d6d56abb053c3cf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
