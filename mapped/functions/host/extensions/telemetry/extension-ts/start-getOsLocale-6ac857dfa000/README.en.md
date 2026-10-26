# `start/getOsLocale`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/extension.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732309-732309](../../../../../../../reference/runtime/host-main.cjs#L732309-L732309) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732309-732309](../../../../../../../reference/runtime/host-main.cjs#L732309-L732309) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732309 uses an implicit arrow-function return.

### host:732309

Calls written directly in this body: `context2.deps.settings.getOsLocale`.

SHA-256 of the source span: `606406f4badff07a5bd0090ef3f0724c6a57374eec3ea553bef9e0a13edea9f1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
