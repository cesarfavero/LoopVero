# `trustedTargetWebSocket`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-executor.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-executor-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:544236-544244](../../../../../../../reference/runtime/host-main.cjs#L544236-L544244) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:544236-544244](../../../../../../../reference/runtime/host-main.cjs#L544236-L544244) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:544236

Calls written directly in this body: `Number`, `absoluteUrlSchema.safeParse`, `isLoopbackHostname`, `new URL`, `url2.toString`.

SHA-256 of the source span: `c926f7cb5567245a4e987701026f08dac68b20e1239abdba9e0ab129c5da7521`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
