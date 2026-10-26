# `draftDestinations`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756070-756078](../../../../../../../reference/runtime/host-main.cjs#L756070-L756078) | `FunctionDeclaration` | no | `{   message,   route,   verification }` |
| [evaluation:541991-541999](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541991-L541999) | `FunctionDeclaration` | no | `{   message,   route,   verification }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756070-756078](../../../../../../../reference/runtime/host-main.cjs#L756070-L756078) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:541991-541999](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541991-L541999) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:756070

Calls written directly in this body: `SLACK_CHANNEL_NOT_DM_ID.test`, `slackChannelLabel`, `verification.workspace.trim`.

SHA-256 of the source span: `2054f62e224ef394e178f8d33f3bc14c0fe3053c8b0b02b85268960b15038caa`.

### evaluation:541991

Calls written directly in this body: `SLACK_CHANNEL_NOT_DM_ID.test`, `slackChannelLabel`, `verification.workspace.trim`.

SHA-256 of the source span: `2054f62e224ef394e178f8d33f3bc14c0fe3053c8b0b02b85268960b15038caa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
