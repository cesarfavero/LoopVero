# `HostTelemetryService.start/reportHostLog`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/host-telemetry-service.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/host-telemetry-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732045-732045](../../../../../../../reference/runtime/host-main.cjs#L732045-L732045) | `ArrowFunctionExpression` | no | `level, line` |
| [host:732082-732082](../../../../../../../reference/runtime/host-main.cjs#L732082-L732082) | `ArrowFunctionExpression` | no | `level, line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732045-732045](../../../../../../../reference/runtime/host-main.cjs#L732045-L732045) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732045 uses an implicit arrow-function return.
| [host:732082-732082](../../../../../../../reference/runtime/host-main.cjs#L732082-L732082) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:732082 uses an implicit arrow-function return.

### host:732045

Calls written directly in this body: `this.logs.reportHostLog`.

SHA-256 of the source span: `63d97fb920da58a3652254174b0fb98dc590e2bdc074913669f92e1140f9e93a`.

### host:732082

Calls written directly in this body: `this.logs.reportHostLog`.

SHA-256 of the source span: `63d97fb920da58a3652254174b0fb98dc590e2bdc074913669f92e1140f9e93a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
