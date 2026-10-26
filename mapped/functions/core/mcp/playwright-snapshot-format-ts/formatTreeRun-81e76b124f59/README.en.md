# `formatTreeRun`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742886-742890](../../../../../../reference/runtime/host-main.cjs#L742886-L742890) | `FunctionDeclaration` | no | `lines2, origin` |
| [evaluation:515548-515552](../../../../../../reference/runtime/sand-eval-runner.cjs#L515548-L515552) | `FunctionDeclaration` | no | `lines2, origin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742886-742890](../../../../../../reference/runtime/host-main.cjs#L742886-L742890) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515548-515552](../../../../../../reference/runtime/sand-eval-runner.cjs#L515548-L515552) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742886

Calls written directly in this body: `collapseWrappers`, `parseTree2`, `renderTree`.

SHA-256 of the source span: `feb2604559c7dc654366c1926f058fa877407e88c150fc2835f7972f0ef415d5`.

### evaluation:515548

Calls written directly in this body: `collapseWrappers`, `parseTree2`, `renderTree`.

SHA-256 of the source span: `feb2604559c7dc654366c1926f058fa877407e88c150fc2835f7972f0ef415d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
