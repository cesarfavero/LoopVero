# `restrictiveness`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/google-routed-tool-permissions.ts` · [Module README](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:687157-687159](../../../../../../reference/runtime/host-main.cjs#L687157-L687159) | `FunctionDeclaration` | no | `permission` |
| [evaluation:579278-579280](../../../../../../reference/runtime/sand-eval-runner.cjs#L579278-L579280) | `FunctionDeclaration` | no | `permission` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687157-687159](../../../../../../reference/runtime/host-main.cjs#L687157-L687159) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579278-579280](../../../../../../reference/runtime/sand-eval-runner.cjs#L579278-L579280) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:687157

Calls written directly in this body: `SAND_STORED_TOOL_PERMISSIONS.indexOf`.

SHA-256 of the source span: `cda187d8fe4a5026cd6688a18ac64a0cc543a571be8cf6c010540bda40c2d597`.

### evaluation:579278

Calls written directly in this body: `SAND_STORED_TOOL_PERMISSIONS.indexOf`.

SHA-256 of the source span: `cda187d8fe4a5026cd6688a18ac64a0cc543a571be8cf6c010540bda40c2d597`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
