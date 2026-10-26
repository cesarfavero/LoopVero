# `SandHost.telemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786707-786709](../../../../../reference/runtime/host-main.cjs#L786707-L786709) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786707-786709](../../../../../reference/runtime/host-main.cjs#L786707-L786709) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:786707

Calls written directly in this body: `.api`, `this.requireHostExtensions`.

SHA-256 of the source span: `a3645e2b909a068e56d29612f6f4fa8067a0937ebe9ab9acfafff6aaa9e0fcbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
