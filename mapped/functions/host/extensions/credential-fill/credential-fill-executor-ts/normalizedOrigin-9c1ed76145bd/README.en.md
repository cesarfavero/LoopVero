# `normalizedOrigin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-executor.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:544217-544226](../../../../../../../reference/runtime/host-main.cjs#L544217-L544226) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:544217-544226](../../../../../../../reference/runtime/host-main.cjs#L544217-L544226) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:544217

Calls written directly in this body: `absoluteUrlSchema.safeParse`, `isLoopbackHostname`, `new URL`.

SHA-256 of the source span: `86ffc1eff6bbf064778ae96a04c44231ee1be874f8cadd1f7cb2ded6ed8c607e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
