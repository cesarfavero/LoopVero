# `startAgentIdentity/downloadTemplateRecipe`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496652-496675](../../../../../../../reference/runtime/host-main.cjs#L496652-L496675) | `ArrowFunctionExpression` | yes | `blobGetUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496652-496675](../../../../../../../reference/runtime/host-main.cjs#L496652-L496675) | 5 | 0 | 2 | 1 | 5 | 0 |

### host:496652

Calls written directly in this body: `.encode`, `JSON.parse`, `Number`, `Number.isFinite`, `botTemplateSchema.safeParse`, `new TemplateRecipeReadError`, `new TextEncoder`, `response.headers.get`, `response.text`, `templateRecipeDeadline.run`.

Explicit throw targets: `TemplateRecipeReadError`.

SHA-256 of the source span: `9d0e53b9b370e65d3e3201f97c45f621938bace9521800c1c3006e7d32731c52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
