# `startDynamicToolCallSpan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761850-761863](../../../../../../../reference/runtime/host-main.cjs#L761850-L761863) | `FunctionDeclaration` | no | `ctx, toolName` |
| [evaluation:554124-554137](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554124-L554137) | `FunctionDeclaration` | no | `ctx, toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761850-761863](../../../../../../../reference/runtime/host-main.cjs#L761850-L761863) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:554124-554137](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554124-L554137) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:761850

Calls written directly in this body: `createSpan`, `ctx.withName`, `disposable.span.setAttribute`, `getSpan2`.

SHA-256 of the source span: `3f8bcf383dd8ef6b88e565f3a192fd6057e3ed5717a27aad9ae69327afc4aa5e`.

### evaluation:554124

Calls written directly in this body: `createSpan`, `ctx.withName`, `disposable.span.setAttribute`, `getSpan2`.

SHA-256 of the source span: `3f8bcf383dd8ef6b88e565f3a192fd6057e3ed5717a27aad9ae69327afc4aa5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
