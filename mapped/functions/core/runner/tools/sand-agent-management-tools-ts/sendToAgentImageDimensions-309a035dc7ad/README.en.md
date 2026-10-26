# `sendToAgentImageDimensions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757380-757385](../../../../../../../reference/runtime/host-main.cjs#L757380-L757385) | `FunctionDeclaration` | yes | `source, readMediaDimensions2` |
| [evaluation:543403-543408](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543403-L543408) | `FunctionDeclaration` | yes | `source, readMediaDimensions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757380-757385](../../../../../../../reference/runtime/host-main.cjs#L757380-L757385) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:543403-543408](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543403-L543408) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:757380

Calls written directly in this body: `filePathFromFileUrl`, `readMediaDimensions2`.

SHA-256 of the source span: `b85151bc8b6342cfdcebdbdf1283ba8e341476ee56ddbf2eb1c879c59dabcbe9`.

### evaluation:543403

Calls written directly in this body: `filePathFromFileUrl`, `readMediaDimensions`.

SHA-256 of the source span: `60bfd9bceb7afef48425b3352e85ac20682041a7d4b9e1e411ac4042f0d0fd47`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
