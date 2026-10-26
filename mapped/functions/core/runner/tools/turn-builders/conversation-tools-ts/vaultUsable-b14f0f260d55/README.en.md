# `vaultUsable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769408-769410](../../../../../../../../reference/runtime/host-main.cjs#L769408-L769410) | `FunctionDeclaration` | no | `host` |
| [evaluation:565055-565057](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565055-L565057) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769408-769410](../../../../../../../../reference/runtime/host-main.cjs#L769408-L769410) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565055-565057](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565055-L565057) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769408

Calls written directly in this body: `host.secureValues.vaultEnabled`, `mountsVaultTool`.

SHA-256 of the source span: `293941627eba05b8113405e99a6df952d8d0b739b71022e476e6e6ae09b03950`.

### evaluation:565055

Calls written directly in this body: `host.secureValues.vaultEnabled`, `mountsVaultTool`.

SHA-256 of the source span: `293941627eba05b8113405e99a6df952d8d0b739b71022e476e6e6ae09b03950`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
