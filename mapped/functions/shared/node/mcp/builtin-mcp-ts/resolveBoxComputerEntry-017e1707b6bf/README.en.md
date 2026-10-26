# `resolveBoxComputerEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/builtin-mcp.ts` · [Module README](../../../../../../modules/shared/node/mcp/builtin-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451467-451474](../../../../../../../reference/runtime/host-main.cjs#L451467-L451474) | `FunctionDeclaration` | no | `env` |
| [evaluation:597071-597078](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597071-L597078) | `FunctionDeclaration` | no | `env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451467-451474](../../../../../../../reference/runtime/host-main.cjs#L451467-L451474) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:597071-597078](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597071-L597078) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:451467

Calls written directly in this body: `env.SAND_BOX_COMPUTER_ENTRY.trim`, `import_node_path7.default.dirname`, `import_node_path7.default.resolve`.

SHA-256 of the source span: `34a2ee675f7ee5b3a4c25137e251f9412fcf813b7cc08f4f01b774b66368acba`.

### evaluation:597071

Calls written directly in this body: `env.SAND_BOX_COMPUTER_ENTRY.trim`, `import_node_path44.default.dirname`, `import_node_path44.default.resolve`.

SHA-256 of the source span: `42e60dc83eb2f5be3d356829d4c5eb92ebf65d51abf8f7ad476be5d99421c43b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
