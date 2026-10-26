# `recipientRule`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756263-756269](../../../../../../../reference/runtime/host-main.cjs#L756263-L756269) | `FunctionDeclaration` | no | `emission` |
| [evaluation:542184-542190](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542184-L542190) | `FunctionDeclaration` | no | `emission` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756263-756269](../../../../../../../reference/runtime/host-main.cjs#L756263-L756269) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:542184-542190](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542184-L542190) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:756263

Calls written directly in this body: `listOf2`, `slackChannelLabel`.

SHA-256 of the source span: `0c8f7475c93cdbbf27173df685902d559edd71a6d9ba6a4f10c6ef83de41aa04`.

### evaluation:542184

Calls written directly in this body: `listOf2`, `slackChannelLabel`.

SHA-256 of the source span: `0c8f7475c93cdbbf27173df685902d559edd71a6d9ba6a4f10c6ef83de41aa04`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
