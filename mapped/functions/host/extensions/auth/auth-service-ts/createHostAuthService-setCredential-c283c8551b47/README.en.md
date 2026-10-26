# `createHostAuthService/setCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/auth-service.ts` · [Module README](../../../../../../modules/host/extensions/auth/auth-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499238-499241](../../../../../../../reference/runtime/host-main.cjs#L499238-L499241) | `ArrowFunctionExpression` | no | `credential` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499238-499241](../../../../../../../reference/runtime/host-main.cjs#L499238-L499241) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:499238

Calls written directly in this body: `store.getValidAccessToken`, `store.setCredential`.

Assignment or increment targets: `wroteFirstCredential`.

SHA-256 of the source span: `576c9ac076e637fcc83c9d36480510ff626f025896084629e4135def1b426107`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
