# `secureValueDomainMatchesSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/domain.ts` · [Module README](../../../../../../modules/core/runner/secure-values/domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758059-758064](../../../../../../../reference/runtime/host-main.cjs#L758059-L758064) | `FunctionDeclaration` | no | `allowedDomain, site` |
| [evaluation:546250-546255](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546250-L546255) | `FunctionDeclaration` | no | `allowedDomain, site` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758059-758064](../../../../../../../reference/runtime/host-main.cjs#L758059-L758064) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:546250-546255](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546250-L546255) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:758059

Calls written directly in this body: `parseSecureValueHttpsSite`, `site.hostname.endsWith`.

SHA-256 of the source span: `44d4f213b16d15b83a79fa1b328c796dfcd39e7dd4b0e79ea9da1e60316af497`.

### evaluation:546250

Calls written directly in this body: `parseSecureValueHttpsSite`, `site.hostname.endsWith`.

SHA-256 of the source span: `44d4f213b16d15b83a79fa1b328c796dfcd39e7dd4b0e79ea9da1e60316af497`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
