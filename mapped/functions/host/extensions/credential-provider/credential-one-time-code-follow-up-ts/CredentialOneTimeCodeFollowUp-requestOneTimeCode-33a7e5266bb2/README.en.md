# `CredentialOneTimeCodeFollowUp.requestOneTimeCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-one-time-code-follow-up.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-one-time-code-follow-up-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548941-548963](../../../../../../../reference/runtime/host-main.cjs#L548941-L548963) | `method` | yes | `session, target, signature` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548941-548963](../../../../../../../reference/runtime/host-main.cjs#L548941-L548963) | 3 | 0 | 1 | 0 | 0 | 1 |

### host:548941

Calls written directly in this body: `new Error`, `this.auditRequest`, `this.options.reportFailure`, `this.options.resolveOneTimeCode`.

Assignment or increment targets: `session.attempts`, `session.inFlight`, `session.lastSignature`.

SHA-256 of the source span: `adbbd0fcff6c6b69237856d80e0948e7980d3286e4e830034432c06d5fde8960`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
