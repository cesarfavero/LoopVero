# `bucketLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-sort-memories-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754237-754242](../../../../../../../reference/runtime/host-main.cjs#L754237-L754242) | `FunctionDeclaration` | no | `heading, records2, shown` |
| [evaluation:536705-536710](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536705-L536710) | `FunctionDeclaration` | no | `heading, records2, shown` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754237-754242](../../../../../../../reference/runtime/host-main.cjs#L754237-L754242) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:536705-536710](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536705-L536710) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:754237

Calls written directly in this body: `.map`, `examples.join`, `records2.slice`.

SHA-256 of the source span: `06e5073deaf709574026a0dad62d1536ae7e01b8d96e4c9061484dafff5a0be1`.

### evaluation:536705

Calls written directly in this body: `.map`, `examples.join`, `records2.slice`.

SHA-256 of the source span: `c96d41c1c7dc79c0b6db70df33a8087621c91945ecdd032557a0ff2834ba73d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
