# `writeFrame`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-process.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-process-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541657-541671](../../../../../../../reference/runtime/host-main.cjs#L541657-L541671) | `FunctionDeclaration` | no | `stream3, frame` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541657-541671](../../../../../../../reference/runtime/host-main.cjs#L541657-L541671) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:541657

Calls written directly in this body: `new Promise`.

SHA-256 of the source span: `eaad669cdad26e4cdce112e1385932c357352701ebf384c39e91f1ea441074d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
