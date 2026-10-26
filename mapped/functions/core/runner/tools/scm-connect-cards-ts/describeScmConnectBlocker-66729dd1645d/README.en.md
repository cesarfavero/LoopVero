# `describeScmConnectBlocker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509326-509397](../../../../../../../reference/runtime/host-main.cjs#L509326-L509397) | `FunctionDeclaration` | yes | `{   provider,   rejection,   knownIntent,   isConnected,   blockedAction,   repoUrl,   readPortalBaseUrl,   readOriginPrIdentityHosts }` |
| [evaluation:557051-557122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557051-L557122) | `FunctionDeclaration` | yes | `{   provider,   rejection,   knownIntent,   isConnected,   blockedAction,   repoUrl,   readPortalBaseUrl,   readOriginPrIdentityHosts }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509326-509397](../../../../../../../reference/runtime/host-main.cjs#L509326-L509397) | 19 | 1 | 1 | 5 | 0 | 0 |
| [evaluation:557051-557122](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557051-L557122) | 19 | 1 | 1 | 5 | 0 | 0 |

### host:509326

Calls written directly in this body: `Promise.allSettled`, `describeOriginBlocker`, `errorClassOf`, `githubRepoSlugFromUrl`, `isRepoAccessShapedRejection`, `isScmNotConnectedShapedRejection`, `isScmReconnectShapedRejection`, `probeTargets.map`, `reportHostDiagnostic`, `requestExample`.

Assignment or increment targets: `hasConnectedProvider`, `leadSentence`, `sawFulfilledProbe`.

SHA-256 of the source span: `ce1d5f477adb2bcb08c78bba8d44c5e82c5d16456bea03d427fe0167b2e27fb6`.

### evaluation:557051

Calls written directly in this body: `Promise.allSettled`, `describeOriginBlocker`, `errorClassOf`, `githubRepoSlugFromUrl`, `isRepoAccessShapedRejection`, `isScmNotConnectedShapedRejection`, `isScmReconnectShapedRejection`, `probeTargets.map`, `reportHostDiagnostic`, `requestExample`.

Assignment or increment targets: `hasConnectedProvider`, `leadSentence`, `sawFulfilledProbe`.

SHA-256 of the source span: `ce1d5f477adb2bcb08c78bba8d44c5e82c5d16456bea03d427fe0167b2e27fb6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
