# `sanitizeSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/spotlight/sand-spotlight.ts` · [Module README](../../../../../modules/shared/spotlight/sand-spotlight-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761630-761632](../../../../../../reference/runtime/host-main.cjs#L761630-L761632) | `FunctionDeclaration` | no | `source` |
| [evaluation:552445-552447](../../../../../../reference/runtime/sand-eval-runner.cjs#L552445-L552447) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761630-761632](../../../../../../reference/runtime/host-main.cjs#L761630-L761632) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552445-552447](../../../../../../reference/runtime/sand-eval-runner.cjs#L552445-L552447) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761630

Calls written directly in this body: `.replaceAll`, `stripSpotlightTag`.

SHA-256 of the source span: `a72ec92687d7bd12d6f8499c21beadfe7810eac31e939c6eca90ee045c0ee736`.

### evaluation:552445

Calls written directly in this body: `.replaceAll`, `stripSpotlightTag`.

SHA-256 of the source span: `a72ec92687d7bd12d6f8499c21beadfe7810eac31e939c6eca90ee045c0ee736`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
