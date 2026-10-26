# `ForeverBoxService.elapsedSince`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/forever-box-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/forever-box-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680424-680426](../../../../../../../reference/runtime/host-main.cjs#L680424-L680426) | `method` | no | `startedAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680424-680426](../../../../../../../reference/runtime/host-main.cjs#L680424-L680426) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:680424

Calls written directly in this body: `Math.max`, `Math.round`, `this.now`.

SHA-256 of the source span: `78243d02238710fff0a962b1ed8edda97ad06832fa8147705bb472967bfbab54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
