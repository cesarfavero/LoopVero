# `SandHostEventBus.emit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-event-bus.ts` · [Module README](../../../../modules/host/host-event-bus-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786258-786270](../../../../../reference/runtime/host-main.cjs#L786258-L786270) | `method` | no | `...args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786258-786270](../../../../../reference/runtime/host-main.cjs#L786258-L786270) | 1 | 1 | 0 | 1 | 0 | 1 |

### host:786258

Calls written directly in this body: `errorLogTag`, `listener`, `this.capabilityEvents.emit`, `this.reportFailure`.

SHA-256 of the source span: `333a1b8409c5d27ccb3ec44ed6e5519e37779873d9f75f44fb39e903ca824f0f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
