# `createPhoneUiGatesService`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/phone-ui-gates-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/phone-ui-gates-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680659-680735](../../../../../../../reference/runtime/host-main.cjs#L680659-L680735) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680659-680735](../../../../../../../reference/runtime/host-main.cjs#L680659-L680735) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:680659

Calls written directly in this body: `createSnapshotStore`, `deps.onCredential`.

SHA-256 of the source span: `41d07fc24ebd15eaebae74797003b1ea334c81637875f6a7a46196241fbb6e13`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
