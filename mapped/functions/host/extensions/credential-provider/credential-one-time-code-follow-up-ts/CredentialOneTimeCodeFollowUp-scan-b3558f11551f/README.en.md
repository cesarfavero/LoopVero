# `CredentialOneTimeCodeFollowUp.scan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-one-time-code-follow-up.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-one-time-code-follow-up-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548896-548940](../../../../../../../reference/runtime/host-main.cjs#L548896-L548940) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548896-548940](../../../../../../../reference/runtime/host-main.cjs#L548896-L548940) | 11 | 1 | 3 | 3 | 0 | 2 |

### host:548896

Calls written directly in this body: `challengeSignature`, `discovery.targets.find`, `matchCredentialItemToSite`, `this.options.filler.inspect`, `this.options.filler.listPages`, `this.options.reportFailure`, `this.pruneExpired`, `this.requestOneTimeCode`, `this.sessions.delete`, `this.sessions.values`, `this.stopPolling`, `trustedBrowserOrigin`.

Assignment or increment targets: `discovery`, `state`.

SHA-256 of the source span: `ac19440400a1d87600ea40035ee41df9c187e1f54b46f3d4cbd8421512df7e2b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
