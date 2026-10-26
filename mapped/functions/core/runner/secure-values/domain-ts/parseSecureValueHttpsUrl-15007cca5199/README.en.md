# `parseSecureValueHttpsUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/domain.ts` · [Module README](../../../../../../modules/core/runner/secure-values/domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758056-758058](../../../../../../../reference/runtime/host-main.cjs#L758056-L758058) | `FunctionDeclaration` | no | `raw` |
| [evaluation:546247-546249](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546247-L546249) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758056-758058](../../../../../../../reference/runtime/host-main.cjs#L758056-L758058) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:546247-546249](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546247-L546249) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:758056

Calls written directly in this body: `URL.parse`, `parseSecureValueHttpsSite`.

SHA-256 of the source span: `f26434f93beb954875c2157da080bb72f47fdccf40df438329d3d6d6dfd171bd`.

### evaluation:546247

Calls written directly in this body: `URL.parse`, `parseSecureValueHttpsSite`.

SHA-256 of the source span: `f26434f93beb954875c2157da080bb72f47fdccf40df438329d3d6d6dfd171bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
