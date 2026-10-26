# `BrokeredGrants.clear`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:550401-550406](../../../../../../../reference/runtime/host-main.cjs#L550401-L550406) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550401-550406](../../../../../../../reference/runtime/host-main.cjs#L550401-L550406) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:550401

Calls written directly in this body: `new Map`, `this.pending.clear`.

Assignment or increment targets: `this.connectionId`, `this.held`, `this.hydrated`.

SHA-256 of the source span: `2bc3bb4512086bcea4d77692ea9acb91022279f2fd236ffd69a01f14128a95ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
