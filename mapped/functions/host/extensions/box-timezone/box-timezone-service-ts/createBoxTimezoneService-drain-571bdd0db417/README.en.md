# `createBoxTimezoneService/drain`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-timezone/box-timezone-service.ts` · [Module README](../../../../../../modules/host/extensions/box-timezone/box-timezone-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506450-506463](../../../../../../../reference/runtime/host-main.cjs#L506450-L506463) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506450-506463](../../../../../../../reference/runtime/host-main.cjs#L506450-L506463) | 1 | 1 | 1 | 0 | 0 | 1 |

### host:506450

Calls written directly in this body: `deps.applyZone`, `deps.log`, `errorLogTag`.

Assignment or increment targets: `applied`, `pending`.

SHA-256 of the source span: `91a461e8ba9936d28c00babecca46b88dc936fce8190eaf7edf5b3b2dfdbee45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
