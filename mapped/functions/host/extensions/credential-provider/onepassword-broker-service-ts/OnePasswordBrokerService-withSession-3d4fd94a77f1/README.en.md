# `OnePasswordBrokerService.withSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550827-550840](../../../../../../../reference/runtime/host-main.cjs#L550827-L550840) | `method` | yes | `call, refreshesSession = rejectsSession` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550827-550840](../../../../../../../reference/runtime/host-main.cjs#L550827-L550840) | 4 | 0 | 4 | 4 | 0 | 0 |

### host:550827

Calls written directly in this body: `apiFailureReason`, `call`, `refreshesSession`, `this.sessionMaterial`.

Assignment or increment targets: `material`, `outcome`.

SHA-256 of the source span: `f7e47aa0131b402e76bf8de9fea7ec8ab3c1286659cbbfca8445d90978e2c122`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
