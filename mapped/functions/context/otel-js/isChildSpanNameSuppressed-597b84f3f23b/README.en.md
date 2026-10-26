# `isChildSpanNameSuppressed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225776-225778](../../../../../reference/runtime/host-main.cjs#L225776-L225778) | `FunctionDeclaration` | no | `spanName` |
| [evaluation:2264-2266](../../../../../reference/runtime/sand-eval-runner.cjs#L2264-L2266) | `FunctionDeclaration` | no | `spanName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225776-225778](../../../../../reference/runtime/host-main.cjs#L225776-L225778) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2264-2266](../../../../../reference/runtime/sand-eval-runner.cjs#L2264-L2266) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225776

Calls written directly in this body: `childSpanSuppressionPredicate`.

SHA-256 of the source span: `10df2cb6b2e1c8d74c54525c5c7ee847383d00948ba168923ac36057792cd3eb`.

### evaluation:2264

Calls written directly in this body: `childSpanSuppressionPredicate`.

SHA-256 of the source span: `10df2cb6b2e1c8d74c54525c5c7ee847383d00948ba168923ac36057792cd3eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
