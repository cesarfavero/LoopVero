# `decodeMcpAccountLabelArgument`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226008-226018](../../../../../../reference/runtime/host-main.cjs#L226008-L226018) | `FunctionDeclaration` | no | `rawArgument` |
| [evaluation:495231-495241](../../../../../../reference/runtime/sand-eval-runner.cjs#L495231-L495241) | `FunctionDeclaration` | no | `rawArgument` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226008-226018](../../../../../../reference/runtime/host-main.cjs#L226008-L226018) | 2 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:495231-495241](../../../../../../reference/runtime/sand-eval-runner.cjs#L495231-L495241) | 2 | 0 | 0 | 2 | 0 | 1 |

### host:226008

Calls written directly in this body: `JSON.parse`, `rawArgument.trim`, `value.endsWith`, `value.startsWith`.

SHA-256 of the source span: `77a117c291696371324d50c43b271d864d6a0ac05c397b315fe74e4a9ecdd7d1`.

### evaluation:495231

Calls written directly in this body: `JSON.parse`, `rawArgument.trim`, `value.endsWith`, `value.startsWith`.

SHA-256 of the source span: `c9f78ec816fb7e7deb4ef4f0cffdd310af53db039493751b70bb587ceb69e460`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
