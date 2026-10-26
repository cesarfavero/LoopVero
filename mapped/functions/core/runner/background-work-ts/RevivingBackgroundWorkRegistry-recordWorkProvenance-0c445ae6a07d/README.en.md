# `RevivingBackgroundWorkRegistry.recordWorkProvenance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/background-work.ts` · [Module README](../../../../../modules/core/runner/background-work-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490409-490413](../../../../../../reference/runtime/sand-eval-runner.cjs#L490409-L490413) | `method` | no | `id, provenance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490409-490413](../../../../../../reference/runtime/sand-eval-runner.cjs#L490409-L490413) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490409

Calls written directly in this body: `spendRequestOwnsProvenance`, `this.provenance.delete`, `this.provenance.get`, `this.provenance.set`.

SHA-256 of the source span: `4776dd1b06fc4b558e2c9a251eba28b4c40811e3f870b5f238225a70f26da61e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
