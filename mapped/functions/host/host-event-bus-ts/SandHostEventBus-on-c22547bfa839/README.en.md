# `SandHostEventBus.on`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-event-bus.ts` · [Module README](../../../../modules/host/host-event-bus-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786271-786273](../../../../../reference/runtime/host-main.cjs#L786271-L786273) | `method` | no | `topic, handler` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786271-786273](../../../../../reference/runtime/host-main.cjs#L786271-L786273) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:786271

Calls written directly in this body: `this.capabilityEvents.on`.

SHA-256 of the source span: `31e2bdc281acc35c5ba6f0d970cd7bf4abcc9918e8479bacc602b73b7f753ded`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
