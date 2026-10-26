# `detectScmProviderForRepoUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509198-509210](../../../../../../../reference/runtime/host-main.cjs#L509198-L509210) | `FunctionDeclaration` | no | `repoUrl, readOriginPrIdentityHosts` |
| [evaluation:556923-556935](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556923-L556935) | `FunctionDeclaration` | no | `repoUrl, readOriginPrIdentityHosts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509198-509210](../../../../../../../reference/runtime/host-main.cjs#L509198-L509210) | 7 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:556923-556935](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556923-L556935) | 7 | 0 | 0 | 8 | 0 | 0 |

### host:509198

Calls written directly in this body: `.hostname.toLowerCase`, `hostname4.endsWith`, `isOriginRepoReference`, `repoUrlAsHttp`.

SHA-256 of the source span: `8a85bd53a729b6b1e24f8c9bfa5dc0f2cb4010cb2c66837268d4a283121bd55c`.

### evaluation:556923

Calls written directly in this body: `.hostname.toLowerCase`, `hostname3.endsWith`, `isOriginRepoReference`, `repoUrlAsHttp`.

SHA-256 of the source span: `db99a351943cc711c1b444d5fb308eae5202fbe667bfcc6f26ca7872f244da37`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
