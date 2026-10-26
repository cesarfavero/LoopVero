# `SandHost.wireDiskPressureGateway`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786607-786622](../../../../../reference/runtime/host-main.cjs#L786607-L786622) | `method` | no | `foreverBox` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786607-786622](../../../../../reference/runtime/host-main.cjs#L786607-L786622) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:786607

Calls written directly in this body: `foreverBox.subscribeToDiskPressure`.

SHA-256 of the source span: `8938d7c4904a9c6e4a130868eebfdc0653c477cea99248e7f8714d2ee2a0f9c4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
