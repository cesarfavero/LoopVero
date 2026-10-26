# `renderTree`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742861-742875](../../../../../../reference/runtime/host-main.cjs#L742861-L742875) | `FunctionDeclaration` | no | `roots, origin` |
| [evaluation:515523-515537](../../../../../../reference/runtime/sand-eval-runner.cjs#L515523-L515537) | `FunctionDeclaration` | no | `roots, origin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742861-742875](../../../../../../reference/runtime/host-main.cjs#L742861-L742875) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515523-515537](../../../../../../reference/runtime/sand-eval-runner.cjs#L515523-L515537) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742861

Calls written directly in this body: `walk3`.

SHA-256 of the source span: `b39a3b1f1d401ac31e50ab722f5f2c6c9f5a6cceabf276af758724e90773abcd`.

### evaluation:515523

Calls written directly in this body: `walk3`.

SHA-256 of the source span: `b39a3b1f1d401ac31e50ab722f5f2c6c9f5a6cceabf276af758724e90773abcd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
