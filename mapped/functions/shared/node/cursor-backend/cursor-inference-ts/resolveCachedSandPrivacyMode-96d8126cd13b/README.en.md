# `resolveCachedSandPrivacyMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224962-224980](../../../../../../../reference/runtime/host-main.cjs#L224962-L224980) | `FunctionDeclaration` | yes | `options2, fetchPrivacyMode` |
| [evaluation:511985-512003](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511985-L512003) | `FunctionDeclaration` | yes | `options2, fetchPrivacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224962-224980](../../../../../../../reference/runtime/host-main.cjs#L224962-L224980) | 3 | 0 | 2 | 2 | 0 | 0 |
| [evaluation:511985-512003](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511985-L512003) | 3 | 0 | 2 | 2 | 0 | 0 |

### host:224962

Calls written directly in this body: `Date.now`, `accountScopeOfToken`, `settlePrivacyMode`.

Assignment or increment targets: `cachedPrivacyMode`, `entry.expiresAt`.

SHA-256 of the source span: `161acd4d13cbabd58869bb6fff8982cd13b5684cff75c0f7b9cd2288caefb31b`.

### evaluation:511985

Calls written directly in this body: `Date.now`, `accountScopeOfToken`, `settlePrivacyMode`.

Assignment or increment targets: `cachedPrivacyMode`, `entry.expiresAt`.

SHA-256 of the source span: `161acd4d13cbabd58869bb6fff8982cd13b5684cff75c0f7b9cd2288caefb31b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
