# `parseMemoryFacts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702785-702825](../../../../../../reference/runtime/host-main.cjs#L702785-L702825) | `FunctionDeclaration` | no | `raw, kind, base, path33` |
| [evaluation:536532-536572](../../../../../../reference/runtime/sand-eval-runner.cjs#L536532-L536572) | `FunctionDeclaration` | no | `raw, kind, base, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702785-702825](../../../../../../reference/runtime/host-main.cjs#L702785-L702825) | 7 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:536532-536572](../../../../../../reference/runtime/sand-eval-runner.cjs#L536532-L536572) | 7 | 1 | 0 | 1 | 0 | 0 |

### host:702785

Calls written directly in this body: `.entries`, `Date.parse`, `MEMORY_FACT_LINE.exec`, `Number.isFinite`, `facts.push`, `memoryIdFor`, `normalizeMemoryContent`, `parseMemoryProvenanceLine`, `raw.split`.

Assignment or increment targets: `facts[computed]`, `order`, `untaggedFactAbove`.

SHA-256 of the source span: `4eacc6d65205de4ffbdf289c574272d693cd35620ac5f766800b2c4ac36dbeed`.

### evaluation:536532

Calls written directly in this body: `.entries`, `Date.parse`, `MEMORY_FACT_LINE.exec`, `Number.isFinite`, `facts.push`, `memoryIdFor`, `normalizeMemoryContent`, `parseMemoryProvenanceLine`, `raw.split`.

Assignment or increment targets: `facts[computed]`, `order`, `untaggedFactAbove`.

SHA-256 of the source span: `4eacc6d65205de4ffbdf289c574272d693cd35620ac5f766800b2c4ac36dbeed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
