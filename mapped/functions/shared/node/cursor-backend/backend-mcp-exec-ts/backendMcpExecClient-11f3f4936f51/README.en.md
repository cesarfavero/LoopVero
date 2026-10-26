# `backendMcpExecClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486910-486918](../../../../../../../reference/runtime/host-main.cjs#L486910-L486918) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486910-486918](../../../../../../../reference/runtime/host-main.cjs#L486910-L486918) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:486910

Calls written directly in this body: `deps.createBackendClient`.

SHA-256 of the source span: `30eb18437c2083e8bab0b660960a223e20dd6a1b94ae57513c904c9d8b80ac03`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
