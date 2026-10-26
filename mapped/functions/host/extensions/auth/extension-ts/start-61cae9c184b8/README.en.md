# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/extension.ts` · [Module README](../../../../../../modules/host/extensions/auth/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499801-499863](../../../../../../../reference/runtime/host-main.cjs#L499801-L499863) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499801-499863](../../../../../../../reference/runtime/host-main.cjs#L499801-L499863) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:499801

Calls written directly in this body: `bestEffortAccessToken`, `context2.deps.settings.noteSelectedTeamScopeSourceChanged`, `context2.deps.settings.setSelectedTeamScopeSource`, `context2.onStop`, `createHostAuthService`, `createRetryPolicy`, `createSelectedTeamReader`, `new GrokBotBoxIdentityMintClient`, `service.peekAccessToken`, `service.peekBoxIdentityCredential`, `service.subscribeToRenewal`, `startGrokBotBoxIdentitySocketServer`, `started2.catch`.

SHA-256 of the source span: `072b685ad7a1f5b7141320f1661d8b09d75037db181a7a860fc84bb91e79a637`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
