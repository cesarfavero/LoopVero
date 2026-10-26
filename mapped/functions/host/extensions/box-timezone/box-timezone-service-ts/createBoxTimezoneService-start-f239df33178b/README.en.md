# `createBoxTimezoneService/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-timezone/box-timezone-service.ts` · [Module README](../../../../../../modules/host/extensions/box-timezone/box-timezone-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506474-506477](../../../../../../../reference/runtime/host-main.cjs#L506474-L506477) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506474-506477](../../../../../../../reference/runtime/host-main.cjs#L506474-L506477) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:506474

Calls written directly in this body: `deps.getUserTimeZone`, `deps.subscribeToUserTimeZone`, `request5`.

Assignment or increment targets: `unsubscribe`.

SHA-256 of the source span: `c2d1acd87423e6cfc0d582ae78ecc9e8d40ce646321f226ca5db13d521fdd54c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
