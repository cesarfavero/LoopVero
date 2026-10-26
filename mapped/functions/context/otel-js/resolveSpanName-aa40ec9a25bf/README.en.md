# `resolveSpanName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225779-225781](../../../../../reference/runtime/host-main.cjs#L225779-L225781) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:2267-2269](../../../../../reference/runtime/sand-eval-runner.cjs#L2267-L2269) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225779-225781](../../../../../reference/runtime/host-main.cjs#L225779-L225781) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2267-2269](../../../../../reference/runtime/sand-eval-runner.cjs#L2267-L2269) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225779

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `e6959e4526a57ac4de47ebce8b91616d51352f449bc62ad581a0f6b8148a9eb5`.

### evaluation:2267

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `e6959e4526a57ac4de47ebce8b91616d51352f449bc62ad581a0f6b8148a9eb5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
