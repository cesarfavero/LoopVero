# `boundedVariant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/local-exec/local-exec-bridge.ts` · [Module README](../../../../../../modules/host/extensions/local-exec/local-exec-bridge-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:682082-682085](../../../../../../../reference/runtime/host-main.cjs#L682082-L682085) | `FunctionDeclaration` | no | `variant` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:682082-682085](../../../../../../../reference/runtime/host-main.cjs#L682082-L682085) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:682082

Calls written directly in this body: `TELEMETRY_VARIANTS.has`.

SHA-256 of the source span: `7b7b651230f5f9080cfcbc1d70fff4cafc9139ac7236c57e06d728efd5fc51bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
