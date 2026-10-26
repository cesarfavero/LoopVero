# `boundedPrefixChanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/turn-telemetry-mappers.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/turn-telemetry-mappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:472508-472511](../../../../../../../reference/runtime/host-main.cjs#L472508-L472511) | `FunctionDeclaration` | no | `changed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472508-472511](../../../../../../../reference/runtime/host-main.cjs#L472508-L472511) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472508

Calls written directly in this body: `changed.join`.

SHA-256 of the source span: `1ff458deca9151b02792f832554a2364d488cadbb7c98ddac82c5b1241c58707`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
