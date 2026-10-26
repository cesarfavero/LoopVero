# `normalizeDisplayName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764323-764333](../../../../../../../reference/runtime/host-main.cjs#L764323-L764333) | `FunctionDeclaration` | no | `raw, field` |
| [evaluation:557691-557701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557691-L557701) | `FunctionDeclaration` | no | `raw, field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764323-764333](../../../../../../../reference/runtime/host-main.cjs#L764323-L764333) | 2 | 0 | 0 | 2 | 1 | 0 |
| [evaluation:557691-557701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557691-L557701) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:764323

Calls written directly in this body: `mailboxDisplayNameError`, `new SandToolInputError`, `raw.trim`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `fa29adeb91d5b4c6c5c1a28077f043d00571d08b848ab11f6e4e1b6d70e8e191`.

### evaluation:557691

Calls written directly in this body: `mailboxDisplayNameError`, `new SandToolInputError`, `raw.trim`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `4cc8726f8063c9706bffb42fc2240a086523cfc25d2d516e3f7e02d2ddf3b2e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
