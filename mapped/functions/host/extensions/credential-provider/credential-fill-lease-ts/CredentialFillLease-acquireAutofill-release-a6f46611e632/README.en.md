# `CredentialFillLease.acquireAutofill/release`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-fill-lease.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-fill-lease-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548547-548558](../../../../../../../reference/runtime/host-main.cjs#L548547-L548558) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548547-548558](../../../../../../../reference/runtime/host-main.cjs#L548547-L548558) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:548547

Calls written directly in this body: `Math.round`, `elapsedMs`, `this.clock.monotonicNow`, `this.forgetIfIdle`, `this.log`, `this.notify`.

Assignment or increment targets: `own3.autofill`, `released`.

SHA-256 of the source span: `cbd5fe4296e8d3e4f944be0f3ae65ef3cae2db11f00e582ead4d2148c0540168`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
