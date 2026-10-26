# `shapeTabs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-result-shaping.ts` · [Module README](../../../../../modules/core/mcp/playwright-result-shaping-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585090-585121](../../../../../../reference/runtime/sand-eval-runner.cjs#L585090-L585121) | `FunctionDeclaration` | no | `{   sections,   toolName,   lastTabList }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585090-585121](../../../../../../reference/runtime/sand-eval-runner.cjs#L585090-L585121) | 8 | 0 | 0 | 7 | 0 | 0 |

### evaluation:585090

Calls written directly in this body: `isTabList`, `listed.join`, `openTabs.join`, `sectionBody`, `sections.flatMap`, `sections.map`.

SHA-256 of the source span: `e6d455e2907fd159d7e747c8dc95c0b0ff03cda8eafb76f9d2c6426fd920821d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
