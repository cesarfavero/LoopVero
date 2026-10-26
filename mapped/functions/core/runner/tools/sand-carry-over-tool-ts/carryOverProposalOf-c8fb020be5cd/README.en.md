# `carryOverProposalOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-carry-over-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-carry-over-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:535769-535786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535769-L535786) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:535769-535786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L535769-L535786) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:535769

Calls written directly in this body: `.filter`, `.slice`, `args.secrets.map`, `firstPickOfEachName`, `new Set`, `plugins.map`, `secrets.map`, `suggestions.map`.

Assignment or increment targets: `reasons[computed]`.

SHA-256 of the source span: `06fc5f4bca0f4ed314a541f78c84a3d1cc7ff452fa08d0e0d2bbef67a12ee662`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
