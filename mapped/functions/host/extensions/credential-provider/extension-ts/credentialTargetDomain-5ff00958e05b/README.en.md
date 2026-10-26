# `credentialTargetDomain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/extension.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551482-551487](../../../../../../../reference/runtime/host-main.cjs#L551482-L551487) | `FunctionDeclaration` | no | `targetUrl, privacyMode` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551482-551487](../../../../../../../reference/runtime/host-main.cjs#L551482-L551487) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:551482

Calls written directly in this body: `siteDomainTelemetryAllowed`, `targetUrl.includes`, `visitedSiteBucket`.

SHA-256 of the source span: `ff91f10ba8a0e1a12ae82410166504ddfb6f17d6dd58e7a2a54e339c1e4e783f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
