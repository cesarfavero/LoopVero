# `buildServerConfigJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779612-779631](../../../../../../../reference/runtime/host-main.cjs#L779612-L779631) | `FunctionDeclaration` | no | `args` |
| [evaluation:579850-579869](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579850-L579869) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779612-779631](../../../../../../../reference/runtime/host-main.cjs#L779612-L779631) | 6 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:579850-579869](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579850-L579869) | 6 | 0 | 0 | 3 | 0 | 0 |

### host:779612

Calls written directly in this body: `JSON.stringify`, `Object.keys`.

SHA-256 of the source span: `5999ad19aed662746308565109ef41f29e025f4ac6af46b713aec8eae43dbccd`.

### evaluation:579850

Calls written directly in this body: `JSON.stringify`, `Object.keys`.

SHA-256 of the source span: `5999ad19aed662746308565109ef41f29e025f4ac6af46b713aec8eae43dbccd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
