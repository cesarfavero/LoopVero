# `slackChannelLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756079-756081](../../../../../../../reference/runtime/host-main.cjs#L756079-L756081) | `FunctionDeclaration` | no | `verification` |
| [evaluation:542000-542002](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542000-L542002) | `FunctionDeclaration` | no | `verification` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756079-756081](../../../../../../../reference/runtime/host-main.cjs#L756079-L756081) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:542000-542002](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542000-L542002) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:756079

Calls written directly in this body: `verification.channelName.replace`.

SHA-256 of the source span: `8085f1e75a973b94df388a2aa0d6a3736044dc64dcf6b1d60777a7bba249de4c`.

### evaluation:542000

Calls written directly in this body: `verification.channelName.replace`.

SHA-256 of the source span: `8085f1e75a973b94df388a2aa0d6a3736044dc64dcf6b1d60777a7bba249de4c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
