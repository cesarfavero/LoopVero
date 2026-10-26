# `configOfServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684868-684871](../../../../../../reference/runtime/host-main.cjs#L684868-L684871) | `FunctionDeclaration` | no | `configJson, serverIdentifier` |
| [evaluation:514656-514659](../../../../../../reference/runtime/sand-eval-runner.cjs#L514656-L514659) | `FunctionDeclaration` | no | `configJson, serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684868-684871](../../../../../../reference/runtime/host-main.cjs#L684868-L684871) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514656-514659](../../../../../../reference/runtime/sand-eval-runner.cjs#L514656-L514659) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:684868

Calls written directly in this body: `JSON.stringify`, `serverEntry`.

SHA-256 of the source span: `b964c20d8e5d5a6385a33e897b61f27b48557e62442b8cc27f203f3c4dae75be`.

### evaluation:514656

Calls written directly in this body: `JSON.stringify`, `serverEntry`.

SHA-256 of the source span: `b964c20d8e5d5a6385a33e897b61f27b48557e62442b8cc27f203f3c4dae75be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
