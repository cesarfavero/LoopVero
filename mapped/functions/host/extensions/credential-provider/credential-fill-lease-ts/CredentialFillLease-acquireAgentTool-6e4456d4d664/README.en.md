# `CredentialFillLease.acquireAgentTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-fill-lease.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-fill-lease-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548561-548618](../../../../../../../reference/runtime/host-main.cjs#L548561-L548618) | `method` | yes | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548561-548618](../../../../../../../reference/runtime/host-main.cjs#L548561-L548618) | 6 | 0 | 1 | 2 | 0 | 0 |

### host:548561

Calls written directly in this body: `.some`, `Math.round`, `createDeadlinePolicy`, `elapsedMs`, `errorLogTag`, `this.clock.monotonicNow`, `this.describeWindow`, `this.forgetIfIdle`, `this.log`, `this.scope`, `this.waitUntil`, `this.window`, `windowKey`.

Assignment or increment targets: `outcome`, `own3.agentWaiting`, `reason`.

SHA-256 of the source span: `245d43c7aed2ed0b9fe7371b9e2db52c8c10ae394d369933f0efd0d4159cc7f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
