# `CredentialFillLease.waitUntil`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-fill-lease.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-fill-lease-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548648-548665](../../../../../../../reference/runtime/host-main.cjs#L548648-L548665) | `method` | yes | `deadline, tryTake, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548648-548665](../../../../../../../reference/runtime/host-main.cjs#L548648-L548665) | 4 | 0 | 1 | 6 | 0 | 1 |

### host:548648

Calls written directly in this body: `deadline.run`, `tryTake`.

SHA-256 of the source span: `3480a66ade31194afee301b35716c99042b80dc8dfb00d8faf0b095705de916b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
