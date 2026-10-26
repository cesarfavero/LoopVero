# `createSandMcpMetaToolOptions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:554286-554328](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554286-L554328) | `FunctionDeclaration` | no | `mcpTools, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:554286-554328](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554286-L554328) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:554286

Calls written directly in this body: `.map`, `Value.fromJson`, `descriptor2.tools.push`, `descriptors.entries`, `descriptors.get`, `descriptors.set`, `isReadonlySubagentMcpToolAllowed`, `new Map`, `new McpMetaToolOptions`, `new McpToolDescriptor`, `toolAnnotationsJsonField`.

Assignment or increment targets: `descriptor2`.

SHA-256 of the source span: `ad5e503bcbe94527fc4ecb6fb321a5d581e64338b9ec1c0e796f143a800bb47f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
