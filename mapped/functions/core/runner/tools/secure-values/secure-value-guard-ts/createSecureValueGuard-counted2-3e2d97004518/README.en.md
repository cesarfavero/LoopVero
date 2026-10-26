# `createSecureValueGuard/counted2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/secure-value-guard.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/secure-value-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:767773-767779](../../../../../../../../reference/runtime/host-main.cjs#L767773-L767779) | `ArrowFunctionExpression` | no | `ctx, tool, redact` |
| [evaluation:563290-563296](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563290-L563296) | `ArrowFunctionExpression` | no | `ctx, tool, redact` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:767773-767779](../../../../../../../../reference/runtime/host-main.cjs#L767773-L767779) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:767773 uses an implicit arrow-function return.
| [evaluation:563290-563296](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563290-L563296) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:563290 uses an implicit arrow-function return.

### host:767773

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ae75d334a190835ddc78d81586c82ab61ef81854f8dcd35c23ffcb98467a4b46`.

### evaluation:563290

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ae75d334a190835ddc78d81586c82ab61ef81854f8dcd35c23ffcb98467a4b46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
