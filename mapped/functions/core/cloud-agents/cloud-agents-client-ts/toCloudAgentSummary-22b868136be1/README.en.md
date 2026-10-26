# `toCloudAgentSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512567-512581](../../../../../../reference/runtime/host-main.cjs#L512567-L512581) | `FunctionDeclaration` | no | `composer, readPortalBaseUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512567-512581](../../../../../../reference/runtime/host-main.cjs#L512567-L512581) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:512567

Calls written directly in this body: `cloudAgentUrl`, `composerProjectFields`, `composerStoredPrState`, `mapRunStatus`.

SHA-256 of the source span: `c9d79fcce39bcf43f3be42e5ef43dbec6ced1851554c9f7c9aa27eed6ccb51dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
