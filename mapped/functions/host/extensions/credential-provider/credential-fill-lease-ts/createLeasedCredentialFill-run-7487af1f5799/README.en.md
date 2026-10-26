# `createLeasedCredentialFill/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-fill-lease.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-fill-lease-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548746-548752](../../../../../../../reference/runtime/host-main.cjs#L548746-L548752) | `ArrowFunctionExpression` | yes | `windowIndex, fill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548746-548752](../../../../../../../reference/runtime/host-main.cjs#L548746-L548752) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:548746

Calls written directly in this body: `fills.set`, `options2.lease.acquireAutofill`, `runWithFill`.

SHA-256 of the source span: `b3d781a04db91dac93fd47738f7ad5a0bd3cf4d2b1148dd80b5ae690d526f604`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
