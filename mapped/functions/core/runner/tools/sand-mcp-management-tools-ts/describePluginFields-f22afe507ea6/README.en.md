# `describePluginFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779822-779832](../../../../../../../reference/runtime/host-main.cjs#L779822-L779832) | `FunctionDeclaration` | no | `detail` |
| [evaluation:580060-580070](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580060-L580070) | `FunctionDeclaration` | no | `detail` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779822-779832](../../../../../../../reference/runtime/host-main.cjs#L779822-L779832) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:580060-580070](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580060-L580070) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779822

Calls written directly in this body: `.join`, `detail.fields.map`.

SHA-256 of the source span: `d28c54182aef65003d8a28bd922a21322bce977ecb567813955edebc58020ff4`.

### evaluation:580060

Calls written directly in this body: `.join`, `detail.fields.map`.

SHA-256 of the source span: `d28c54182aef65003d8a28bd922a21322bce977ecb567813955edebc58020ff4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
