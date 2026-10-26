# `describeServerIdResolutionFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779756-779767](../../../../../../../reference/runtime/host-main.cjs#L779756-L779767) | `FunctionDeclaration` | no | `token, resolution` |
| [evaluation:579994-580005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579994-L580005) | `FunctionDeclaration` | no | `token, resolution` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779756-779767](../../../../../../../reference/runtime/host-main.cjs#L779756-L779767) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:579994-580005](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579994-L580005) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:779756

Calls written directly in this body: `noInstalledServerMessage`.

SHA-256 of the source span: `ad749df48ca0d763288370e3542e4006bb4034fc3f8628d4e6ce55e9230fe82f`.

### evaluation:579994

Calls written directly in this body: `noInstalledServerMessage`.

SHA-256 of the source span: `ad749df48ca0d763288370e3542e4006bb4034fc3f8628d4e6ce55e9230fe82f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
