# `CredentialFillLease.acquireAutofill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-fill-lease.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-fill-lease-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548500-548560](../../../../../../../reference/runtime/host-main.cjs#L548500-L548560) | `method` | yes | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548500-548560](../../../../../../../reference/runtime/host-main.cjs#L548500-L548560) | 4 | 0 | 1 | 2 | 0 | 0 |

### host:548500

Calls written directly in this body: `.some`, `Math.round`, `elapsedMs`, `errorLogTag`, `this.clock.monotonicNow`, `this.describeWindow`, `this.forgetIfIdle`, `this.log`, `this.notify`, `this.scope`, `this.waitUntil`, `this.window`, `windowKey`.

Assignment or increment targets: `outcome`, `own3.autofillWaiting`, `reason`.

SHA-256 of the source span: `28382b679ee9663ec411bfd0e2c46c2fc30d9424074885004443f16188a22a9b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
