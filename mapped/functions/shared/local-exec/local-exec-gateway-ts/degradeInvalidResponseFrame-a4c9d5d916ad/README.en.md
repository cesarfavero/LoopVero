# `degradeInvalidResponseFrame`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/gateway/README.en.md).

**Module:** `shared/local-exec/local-exec-gateway.ts` · [Module README](../../../../../modules/shared/local-exec/local-exec-gateway-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486658-486669](../../../../../../reference/runtime/host-main.cjs#L486658-L486669) | `FunctionDeclaration` | no | `frame` |
| [evaluation:548532-548543](../../../../../../reference/runtime/sand-eval-runner.cjs#L548532-L548543) | `FunctionDeclaration` | no | `frame` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486658-486669](../../../../../../reference/runtime/host-main.cjs#L486658-L486669) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:548532-548543](../../../../../../reference/runtime/sand-eval-runner.cjs#L548532-L548543) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:486658

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `be8c4d6cede9e5dc0462888c76c0349bd0e409a9a5db77a4fc4120c31ed603a9`.

### evaluation:548532

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `816494e2664aa68fa1440ff53f8580af7ddc79edd100b0f6799715424d5b2805`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
