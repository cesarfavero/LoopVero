# `createUserFormHostFillTiming/finish`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/user-form-service.ts` · [Module README](../../../../../../modules/host/extensions/session/user-form-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728178-728191](../../../../../../../reference/runtime/host-main.cjs#L728178-L728191) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728178-728191](../../../../../../../reference/runtime/host-main.cjs#L728178-L728191) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:728178

Calls written directly in this body: `Math.max`, `clock.monotonicNow`, `durations.get`.

SHA-256 of the source span: `5accd8e344dd5653adf3bf091173a954573fb44b694bc0c6e6ca86772ac241e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
