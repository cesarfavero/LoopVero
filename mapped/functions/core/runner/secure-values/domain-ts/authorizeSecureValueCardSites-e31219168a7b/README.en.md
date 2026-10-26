# `authorizeSecureValueCardSites`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/domain.ts` · [Module README](../../../../../../modules/core/runner/secure-values/domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758065-758072](../../../../../../../reference/runtime/host-main.cjs#L758065-L758072) | `FunctionDeclaration` | no | `args` |
| [evaluation:546256-546263](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546256-L546263) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758065-758072](../../../../../../../reference/runtime/host-main.cjs#L758065-L758072) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:546256-546263](../../../../../../../reference/runtime/sand-eval-runner.cjs#L546256-L546263) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:758065

Calls written directly in this body: `parseSecureValueHttpsUrl`.

SHA-256 of the source span: `814ae1b3c12d3ebc6f583f0c05d778f0e1189cd3095bcd1cf6f532d673887650`.

### evaluation:546256

Calls written directly in this body: `parseSecureValueHttpsUrl`.

SHA-256 of the source span: `814ae1b3c12d3ebc6f583f0c05d778f0e1189cd3095bcd1cf6f532d673887650`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
