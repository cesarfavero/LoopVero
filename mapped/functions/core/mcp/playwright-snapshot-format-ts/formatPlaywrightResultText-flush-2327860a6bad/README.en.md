# `formatPlaywrightResultText/flush`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742897-742900](../../../../../../reference/runtime/host-main.cjs#L742897-L742900) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:515559-515562](../../../../../../reference/runtime/sand-eval-runner.cjs#L515559-L515562) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742897-742900](../../../../../../reference/runtime/host-main.cjs#L742897-L742900) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515559-515562](../../../../../../reference/runtime/sand-eval-runner.cjs#L515559-L515562) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:742897

Calls written directly in this body: `formatTreeRun`, `out.push`.

Assignment or increment targets: `run`.

SHA-256 of the source span: `d6a6563d6f895f73c197ed7045982e0bec11651be6fa17341f953149000bbfcb`.

### evaluation:515559

Calls written directly in this body: `formatTreeRun`, `out.push`.

Assignment or increment targets: `run`.

SHA-256 of the source span: `d6a6563d6f895f73c197ed7045982e0bec11651be6fa17341f953149000bbfcb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
