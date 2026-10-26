# `../packages/context/dist/otel.js/<class>.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/otel.js` · [Module README](../../../../modules/context/otel-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225883-225887](../../../../../reference/runtime/host-main.cjs#L225883-L225887) | `method` | no | `ctx, span, shouldEnd = true` |
| [evaluation:2397-2401](../../../../../reference/runtime/sand-eval-runner.cjs#L2397-L2401) | `method` | no | `ctx, span, shouldEnd = true` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225883-225887](../../../../../reference/runtime/host-main.cjs#L225883-L225887) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2397-2401](../../../../../reference/runtime/sand-eval-runner.cjs#L2397-L2401) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225883

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.ctx`, `this.shouldEnd`, `this.span`.

SHA-256 of the source span: `4c853ef39e7c81d3f0cc72866dee98a404378dcb48b9182b2f03a434680ce640`.

### evaluation:2397

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.ctx`, `this.shouldEnd`, `this.span`.

SHA-256 of the source span: `4c853ef39e7c81d3f0cc72866dee98a404378dcb48b9182b2f03a434680ce640`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
