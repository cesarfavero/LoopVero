# `startCredentialProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/extension.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:551488-551970](../../../../../../../reference/runtime/host-main.cjs#L551488-L551970) | `FunctionDeclaration` | yes | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551488-551970](../../../../../../../reference/runtime/host-main.cjs#L551488-L551970) | 4 | 0 | 3 | 1 | 0 | 0 |

### host:551488

Calls written directly in this body: `.withName`, `applyMarker`, `context2.deps.experiments.checkGate`, `context2.onStop`, `createBrokerGrantWriter`, `createBrokerSessionReader`, `createContext`, `createCredentialAuditLogger`, `createCredentialAutoFillRequestResolver`, `createCredentialFillRemoteHolds`, `createCredentialOneTimeCodeResolver`, `createCredentialPasswordStepResolver`, `createCredentialProviderDirectoryReader`, `createLeasedCredentialFill`, `createPollingPolicy2`, `createSandCursorBackendClient`, `installAndArm`, `new AbortController`, `new BrowserCredentialFiller`, `new CredentialCoordinator`, `new CredentialFillLease`, `new CredentialOneTimeCodeFollowUp`, `new CredentialPasswordStepFollowUp`, `new OnePasswordBrokerBridge`, `new OnePasswordBrokerService`, `removeOnePasswordExtension`.

Assignment or increment targets: `broker`.

SHA-256 of the source span: `1f55ef8dcf60582dac9582f86fd910ef8422499dfcd07ec977327bc92a939fe3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
