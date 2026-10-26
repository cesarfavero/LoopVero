# `localExecRefusedTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/local-exec-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/local-exec-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472090-472105](../../../../../../../reference/runtime/host-main.cjs#L472090-L472105) | `FunctionDeclaration` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472090-472105](../../../../../../../reference/runtime/host-main.cjs#L472090-L472105) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472090

Calls written directly in this body: `Math.round`, `brandedId`, `logFields`, `refusalError`, `sandErrorTags`.

SHA-256 of the source span: `b9a01cff997191b1921a1d140f2f3b095d91f78af6e3ecf66c294a16efb1b248`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
