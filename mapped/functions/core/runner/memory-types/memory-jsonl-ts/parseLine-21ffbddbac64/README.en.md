# `parseLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-jsonl.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-jsonl-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754609-754618](../../../../../../../reference/runtime/host-main.cjs#L754609-L754618) | `FunctionDeclaration` | no | `raw` |
| [evaluation:537576-537585](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537576-L537585) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754609-754618](../../../../../../../reference/runtime/host-main.cjs#L754609-L754618) | 1 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:537576-537585](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537576-L537585) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:754609

Calls written directly in this body: `JSON.parse`, `memoryJsonlLineSchema.safeParse`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `b687bcccde2fc0b3de7a542be27c0fbd73a8167b8c67b1775a1b636a76c95c6d`.

### evaluation:537576

Calls written directly in this body: `JSON.parse`, `memoryJsonlLineSchema.safeParse`.

Assignment or increment targets: `value`.

SHA-256 of the source span: `4f2d1c73cda216746f13a930cce00217aea571f95642f2101f9f9d24a0d6bca7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
