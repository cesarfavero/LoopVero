# `describeInstalledList`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779768-779776](../../../../../../../reference/runtime/host-main.cjs#L779768-L779776) | `FunctionDeclaration` | no | `servers, signOutNote` |
| [evaluation:580006-580014](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580006-L580014) | `FunctionDeclaration` | no | `servers, signOutNote` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779768-779776](../../../../../../../reference/runtime/host-main.cjs#L779768-L779776) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:580006-580014](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580006-L580014) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779768

Calls written directly in this body: `.join`, `servers.map`.

SHA-256 of the source span: `d381841e9004da58c71d081992df1dcadf089f7a1f1e2b96deeac6cf26db03b1`.

### evaluation:580006

Calls written directly in this body: `.join`, `servers.map`.

SHA-256 of the source span: `d381841e9004da58c71d081992df1dcadf089f7a1f1e2b96deeac6cf26db03b1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
