# `unresolvedTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-fallback.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-fallback-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:585229-585234](../../../../../../reference/runtime/sand-eval-runner.cjs#L585229-L585234) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:585229-585234](../../../../../../reference/runtime/sand-eval-runner.cjs#L585229-L585234) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:585229

Calls written directly in this body: `.join`, `isUnresolvedTargetReason`, `playwrightToolErrorReason`, `result.result.value.content.flatMap`.

SHA-256 of the source span: `2a8fd4a86be717016ecaced3caac32a1f6fba3c604a7ed1e330ce19520720d9f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
