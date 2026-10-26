# `describeOriginBlocker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509300-509325](../../../../../../../reference/runtime/host-main.cjs#L509300-L509325) | `FunctionDeclaration` | no | `{   rejection,   knownIntent,   blockedAction,   repoUrl,   readPortalBaseUrl,   readOriginPrIdentityHosts }` |
| [evaluation:557025-557050](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557025-L557050) | `FunctionDeclaration` | no | `{   rejection,   knownIntent,   blockedAction,   repoUrl,   readPortalBaseUrl,   readOriginPrIdentityHosts }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509300-509325](../../../../../../../reference/runtime/host-main.cjs#L509300-L509325) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:557025-557050](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557025-L557050) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:509300

Calls written directly in this body: `/create an origin namespace|no origin namespace/i.test`, `/origin is (turned|switched) off for (this|your|the) team|origin (is )?disabled for (this|your|the) team/i.test`, `describeOriginAccessBlocker`, `isRepoAccessShapedRejection`, `originRepoIdentityFromReference`.

SHA-256 of the source span: `36e8a2fe90c6964268bdc57694b402ab6c3ea1f84db331a1a20b6dd023cebf77`.

### evaluation:557025

Calls written directly in this body: `/create an origin namespace|no origin namespace/i.test`, `/origin is (turned|switched) off for (this|your|the) team|origin (is )?disabled for (this|your|the) team/i.test`, `describeOriginAccessBlocker`, `isRepoAccessShapedRejection`, `originRepoIdentityFromReference`.

SHA-256 of the source span: `36e8a2fe90c6964268bdc57694b402ab6c3ea1f84db331a1a20b6dd023cebf77`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
