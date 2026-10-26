# `SandProductAnalytics.markActive`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/analytics/product-analytics.ts` · [Module README](../../../../../../modules/shared/node/analytics/product-analytics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730515-730525](../../../../../../../reference/runtime/host-main.cjs#L730515-L730525) | `method` | no | `reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730515-730525](../../../../../../../reference/runtime/host-main.cjs#L730515-L730525) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:730515

Calls written directly in this body: `.slice`, `.toISOString`, `brandedLocale`, `new Date`, `this.canRecordEvents`, `this.lastActiveDayKeys.get`, `this.lastActiveDayKeys.set`, `this.options.getOsLocale`, `this.trackEvent`.

SHA-256 of the source span: `03d78877c5f1d6a36915a5ae0c42d0b624eaa56baab2d2d47adc90db266dc06f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
