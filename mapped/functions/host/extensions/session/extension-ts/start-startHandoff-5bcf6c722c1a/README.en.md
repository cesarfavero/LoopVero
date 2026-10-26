# `start/startHandoff`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/extension.ts` · [Module README](../../../../../../modules/host/extensions/session/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728501-728501](../../../../../../../reference/runtime/host-main.cjs#L728501-L728501) | `ArrowFunctionExpression` | no | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728501-728501](../../../../../../../reference/runtime/host-main.cjs#L728501-L728501) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:728501 uses an implicit arrow-function return.

### host:728501

Calls written directly in this body: `handoff2.start`.

SHA-256 of the source span: `338bfca0323bd5e4beeeabd65d928bbb04310d963663f786f2de68960aa23d2f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
