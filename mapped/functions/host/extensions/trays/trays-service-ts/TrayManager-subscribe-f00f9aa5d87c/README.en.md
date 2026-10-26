# `TrayManager.subscribe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/trays-service.ts` · [Module README](../../../../../../modules/host/extensions/trays/trays-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784538-784543](../../../../../../../reference/runtime/host-main.cjs#L784538-L784543) | `method` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784538-784543](../../../../../../../reference/runtime/host-main.cjs#L784538-L784543) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784538

Calls written directly in this body: `this.emitter.on`.

SHA-256 of the source span: `1a2e79cab379c3adbdf95afd6f3ef8fb7bd9f78d33fc863f2bab1f26f40bc9c5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
