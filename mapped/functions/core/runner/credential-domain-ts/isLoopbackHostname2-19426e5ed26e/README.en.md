# `isLoopbackHostname2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/credential-domain.ts` · [Module README](../../../../../modules/core/runner/credential-domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546792-546796](../../../../../../reference/runtime/host-main.cjs#L546792-L546796) | `FunctionDeclaration` | no | `hostname4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546792-546796](../../../../../../reference/runtime/host-main.cjs#L546792-L546796) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546792

Calls written directly in this body: `host.split`, `hostname4.toLowerCase`, `octets.every`.

SHA-256 of the source span: `c824018e18149629bef1701b32a4cf50b3a7e649c48fbaf515c5e45acf9392f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
