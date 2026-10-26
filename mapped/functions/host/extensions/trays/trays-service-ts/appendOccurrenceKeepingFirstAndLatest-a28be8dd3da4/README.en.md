# `appendOccurrenceKeepingFirstAndLatest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/trays-service.ts` · [Module README](../../../../../../modules/host/extensions/trays/trays-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784423-784426](../../../../../../../reference/runtime/host-main.cjs#L784423-L784426) | `FunctionDeclaration` | no | `occurrences, now` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784423-784426](../../../../../../../reference/runtime/host-main.cjs#L784423-L784426) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:784423

Calls written directly in this body: `appended.filter`.

SHA-256 of the source span: `6649a4678351c52ad8b841de25e24e1dfcd80b0644bc7d3923a0e7af8da36ce4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
