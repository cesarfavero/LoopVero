# `normalizeSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/download-file-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/download-file-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773792-773805](../../../../../../../reference/runtime/host-main.cjs#L773792-L773805) | `FunctionDeclaration` | no | `source` |
| [evaluation:573013-573026](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573013-L573026) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773792-773805](../../../../../../../reference/runtime/host-main.cjs#L773792-L773805) | 3 | 0 | 0 | 2 | 2 | 0 |
| [evaluation:573013-573026](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573013-L573026) | 3 | 0 | 0 | 2 | 2 | 0 |

### host:773792

Calls written directly in this body: `new SandToolInputError`, `nonEmpty5`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `0417a3227fcb22557bc38414e0bb0e22f0a6423a4bc78d6bc10fd7c59e86fe2b`.

### evaluation:573013

Calls written directly in this body: `new SandToolInputError`, `nonEmpty4`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `d94b9f531a5bf8a3ce05145a01a0f16839ae69c71374604a49874845006b03d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
