# `CredentialPasswordStepFollowUp.pruneExpired`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-password-step-follow-up.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-password-step-follow-up-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:549138-549148](../../../../../../../reference/runtime/host-main.cjs#L549138-L549148) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:549138-549148](../../../../../../../reference/runtime/host-main.cjs#L549138-L549148) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:549138

Calls written directly in this body: `this.end`, `this.now`, `this.sessions.values`.

SHA-256 of the source span: `bb7264e81567b4633984f3535cec4ee3d9790fe3677bf44e613e84eb167ca9ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
