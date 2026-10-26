# `SandHost.releaseAgentBox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786733-786735](../../../../../reference/runtime/host-main.cjs#L786733-L786735) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786733-786735](../../../../../reference/runtime/host-main.cjs#L786733-L786735) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:786733

Calls written directly in this body: `.api`, `.releaseAgent`, `this.requireHostExtensions`.

SHA-256 of the source span: `975e3453de7c7e854697190bf58b61c057098685f58d8a98637253b2717ca862`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
