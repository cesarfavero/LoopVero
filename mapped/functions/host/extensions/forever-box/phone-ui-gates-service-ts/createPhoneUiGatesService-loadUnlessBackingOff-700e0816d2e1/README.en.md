# `createPhoneUiGatesService/loadUnlessBackingOff`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/phone-ui-gates-service.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/phone-ui-gates-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680711-680716](../../../../../../../reference/runtime/host-main.cjs#L680711-L680716) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680711-680716](../../../../../../../reference/runtime/host-main.cjs#L680711-L680716) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:680711

Calls written directly in this body: `deps.clock.monotonicNow`, `isFresh`, `runFetch`.

SHA-256 of the source span: `a01e08583801ca897b4b4965434d0703b1a09f5256f4c354501883f7872829bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
