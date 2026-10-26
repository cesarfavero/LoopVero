# `classifyDiskPressure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/disk-pressure-guard.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/disk-pressure-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679675-679691](../../../../../../../reference/runtime/host-main.cjs#L679675-L679691) | `FunctionDeclaration` | no | `snapshot, previous = "healthy"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679675-679691](../../../../../../../reference/runtime/host-main.cjs#L679675-L679691) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:679675

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `98d0afdea02e6bf61e0f974c796e3e03263790f899b87e501278e88b92064677`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
