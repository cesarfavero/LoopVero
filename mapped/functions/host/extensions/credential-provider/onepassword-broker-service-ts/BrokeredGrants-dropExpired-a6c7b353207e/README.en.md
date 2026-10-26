# `BrokeredGrants.dropExpired`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550446-550459](../../../../../../../reference/runtime/host-main.cjs#L550446-L550459) | `method` | yes | `nowMs2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550446-550459](../../../../../../../reference/runtime/host-main.cjs#L550446-L550459) | 2 | 1 | 1 | 3 | 0 | 0 |

### host:550446

Calls written directly in this body: `.filter`, `expired.map`, `this.held.delete`, `this.held.values`, `this.persist`.

SHA-256 of the source span: `016c6573b65f25b2203c7ebbe6d9b85371686bcbac80330d9303a295745dc603`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
