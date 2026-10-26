# `OnePasswordBrokerService.createAccessRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550841-550953](../../../../../../../reference/runtime/host-main.cjs#L550841-L550953) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550841-550953](../../../../../../../reference/runtime/host-main.cjs#L550841-L550953) | 11 | 1 | 7 | 6 | 0 | 0 |

### host:550841

Calls written directly in this body: `.requests.set`, `createOn`, `created.result.accessRequest.entries.map`, `fail3`, `failFresh`, `fresh.push`, `new Set`, `reused.push`, `reusedEntryIds.add`, `reusedEntryIds.has`, `this.agent`, `this.grants.dropExpired`, `this.grants.forWebsite`, `this.now`, `this.options.audit`, `this.options.log`, `this.pickOrStartCdpPort`, `this.sessionMaterial`, `this.windowFor`, `unavailableDiagnostics`, `validateInput`.

Assignment or increment targets: `cdpPort`, `created`.

SHA-256 of the source span: `2efc644dd2a799801afcb7710fc682a17b5231cb30c6de6f95f6102e853ee177`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
