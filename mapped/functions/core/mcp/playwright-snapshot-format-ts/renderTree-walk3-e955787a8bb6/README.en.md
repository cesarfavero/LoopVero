# `renderTree/walk3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742863-742872](../../../../../../reference/runtime/host-main.cjs#L742863-L742872) | `ArrowFunctionExpression` | no | `nodes, depth` |
| [evaluation:515525-515534](../../../../../../reference/runtime/sand-eval-runner.cjs#L515525-L515534) | `ArrowFunctionExpression` | no | `nodes, depth` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742863-742872](../../../../../../reference/runtime/host-main.cjs#L742863-L742872) | 1 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:515525-515534](../../../../../../reference/runtime/sand-eval-runner.cjs#L515525-L515534) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:742863

Calls written directly in this body: `  .repeat`, `compactBody`, `out.push`, `walk3`.

SHA-256 of the source span: `8427c56aab6136a75602380f36056487d6ce74ee6bee924bf36f462396f61fbb`.

### evaluation:515525

Calls written directly in this body: `  .repeat`, `compactBody`, `out.push`, `walk3`.

SHA-256 of the source span: `8427c56aab6136a75602380f36056487d6ce74ee6bee924bf36f462396f61fbb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
