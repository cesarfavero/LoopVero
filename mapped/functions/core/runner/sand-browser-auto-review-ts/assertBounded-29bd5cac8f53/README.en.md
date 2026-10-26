# `assertBounded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699703-699707](../../../../../../reference/runtime/host-main.cjs#L699703-L699707) | `FunctionDeclaration` | no | `value, field, maxChars` |
| [evaluation:513459-513463](../../../../../../reference/runtime/sand-eval-runner.cjs#L513459-L513463) | `FunctionDeclaration` | no | `value, field, maxChars` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699703-699707](../../../../../../reference/runtime/host-main.cjs#L699703-L699707) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:513459-513463](../../../../../../reference/runtime/sand-eval-runner.cjs#L513459-L513463) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:699703

Calls written directly in this body: `rejectOversizedField2`.

SHA-256 of the source span: `686d834bad9ffd57b6549d15e8dc4256d2515254964d7d4e9d50f275ceb5d903`.

### evaluation:513459

Calls written directly in this body: `rejectOversizedField2`.

SHA-256 of the source span: `686d834bad9ffd57b6549d15e8dc4256d2515254964d7d4e9d50f275ceb5d903`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
