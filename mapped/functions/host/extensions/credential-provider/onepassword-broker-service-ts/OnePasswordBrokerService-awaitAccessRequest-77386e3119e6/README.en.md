# `OnePasswordBrokerService.awaitAccessRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550981-551077](../../../../../../../reference/runtime/host-main.cjs#L550981-L551077) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550981-551077](../../../../../../../reference/runtime/host-main.cjs#L550981-L551077) | 12 | 2 | 4 | 6 | 0 | 0 |

### host:550981

Calls written directly in this body: `.filter`, `.requests.delete`, `TRANSIENT_STATUS_FAILURES.has`, `auditReasonFor`, `granted.map`, `granted.push`, `new Set`, `open13.entries.find`, `open13.entries.map`, `pauseUnder`, `settle3`, `this.agent`, `this.grants.add`, `this.now`, `this.observeAccessRequest`, `this.options.log`.

Assignment or increment targets: `extraGrantCount`, `failedPolls`, `pendingPolls`.

SHA-256 of the source span: `4c82558431e7d662ebc8cce0412a78731906d04cc2720a5422ba5562127ab10e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
