# `hasErrnoCode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/host-crash-marker.ts` · [Module README](../../../../modules/host/host-crash-marker-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471421-471423](../../../../../reference/runtime/host-main.cjs#L471421-L471423) | `FunctionDeclaration` | no | `error64, code` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471421-471423](../../../../../reference/runtime/host-main.cjs#L471421-L471423) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:471421

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `9d80881fb87f437a8de0474323b159a57f6b166bf8cb28b2b16c1f9684061db4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
