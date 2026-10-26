# `BrokeredGrants.replace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550375-550397](../../../../../../../reference/runtime/host-main.cjs#L550375-L550397) | `method` | no | `connectionId, delivered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550375-550397](../../../../../../../reference/runtime/host-main.cjs#L550375-L550397) | 5 | 2 | 0 | 0 | 0 | 0 |

### host:550375

Calls written directly in this body: `delivered.slice`, `grantSchema.safeParse`, `held.delete`, `held.set`, `new Map`, `this.log`, `this.pending.clear`, `this.pending.delete`.

Assignment or increment targets: `this.connectionId`, `this.held`, `this.hydrated`.

SHA-256 of the source span: `819598c503defae8933cea153073f477834fac3b443ec6b516840fa882c4dd4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
