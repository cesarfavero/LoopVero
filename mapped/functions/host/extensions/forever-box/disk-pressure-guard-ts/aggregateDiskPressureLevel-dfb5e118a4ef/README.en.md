# `aggregateDiskPressureLevel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/disk-pressure-guard.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/disk-pressure-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679669-679674](../../../../../../../reference/runtime/host-main.cjs#L679669-L679674) | `FunctionDeclaration` | no | `states` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679669-679674](../../../../../../../reference/runtime/host-main.cjs#L679669-L679674) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:679669

Calls written directly in this body: `states.values`, `volumes.some`.

SHA-256 of the source span: `a701dc3e46821b875aa5e9d978df79c9562c481830323861cf21e2c2698a84bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
