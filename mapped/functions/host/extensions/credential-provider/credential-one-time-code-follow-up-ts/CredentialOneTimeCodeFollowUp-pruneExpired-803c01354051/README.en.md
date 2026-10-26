# `CredentialOneTimeCodeFollowUp.pruneExpired`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-one-time-code-follow-up.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-one-time-code-follow-up-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548975-548982](../../../../../../../reference/runtime/host-main.cjs#L548975-L548982) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548975-548982](../../../../../../../reference/runtime/host-main.cjs#L548975-L548982) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:548975

Calls written directly in this body: `this.now`, `this.sessions.delete`.

SHA-256 of the source span: `08335b47512aa0295b6875d89f19ad456a64102fece45debbc3c1f47e7e03ff1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
