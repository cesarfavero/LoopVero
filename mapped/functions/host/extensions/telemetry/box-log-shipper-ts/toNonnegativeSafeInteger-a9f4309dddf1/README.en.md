# `toNonnegativeSafeInteger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:731303-731306](../../../../../../../reference/runtime/host-main.cjs#L731303-L731306) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731303-731306](../../../../../../../reference/runtime/host-main.cjs#L731303-L731306) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:731303

Calls written directly in this body: `Math.max`, `Math.min`, `Math.round`, `Number.isFinite`.

SHA-256 of the source span: `3529287b051507fc5decfee0ebd0ffd9ae6ccd746e3a7fd6cfd7b87e83ff0f0b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
