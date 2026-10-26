# `classifyToolError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725028-725034](../../../../../../../reference/runtime/host-main.cjs#L725028-L725034) | `FunctionDeclaration` | no | `error64` |
| [evaluation:479999-480005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479999-L480005) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725028-725034](../../../../../../../reference/runtime/host-main.cjs#L725028-L725034) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:479999-480005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479999-L480005) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:725028

Calls written directly in this body: `isInfrastructureError`.

SHA-256 of the source span: `5386352e10cd9829b461ffddc5c8620e20e4d15610c0a357eef306c132f0d238`.

### evaluation:479999

Calls written directly in this body: `isInfrastructureError`.

SHA-256 of the source span: `a88e646d6abee904dec8bb5b7c3c239e892f02919dfebb947f240b0cd62574ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
