# `matchWebsiteToSite`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/credential-domain.ts` · [Module README](../../../../../modules/core/runner/credential-domain-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546840-546862](../../../../../../reference/runtime/host-main.cjs#L546840-L546862) | `FunctionDeclaration` | no | `{   website,   target: rawTarget }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546840-546862](../../../../../../reference/runtime/host-main.cjs#L546840-L546862) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:546840

Calls written directly in this body: `isSecureCredentialTarget`, `matchTargetRule`, `normalizedHostname2`, `normalizedPort`, `parseHttpUrl`.

SHA-256 of the source span: `bca9ff2413c878fe98e1e8fc124c3582068d4235a1eacb53f32358ecb1b35158`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
