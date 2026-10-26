# `mountsVaultTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:769403-769407](../../../../../../../../reference/runtime/host-main.cjs#L769403-L769407) | `FunctionDeclaration` | no | `host` |
| [evaluation:565050-565054](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565050-L565054) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:769403-769407](../../../../../../../../reference/runtime/host-main.cjs#L769403-L769407) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:565050-565054](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565050-L565054) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:769403

Calls written directly in this body: `secureValues.vaultEnabled`, `secureValues.vaultGateOn`.

SHA-256 of the source span: `f1ccd0e3a7a19f6d437b1e163bb3bf6e3040704abfed6506c3fddc325c7b93e6`.

### evaluation:565050

Calls written directly in this body: `secureValues.vaultEnabled`, `secureValues.vaultGateOn`.

SHA-256 of the source span: `f1ccd0e3a7a19f6d437b1e163bb3bf6e3040704abfed6506c3fddc325c7b93e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
