# `coerceMcpArgsToToolSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-validation.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-validation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:686595-686605](../../../../../../../reference/runtime/host-main.cjs#L686595-L686605) | `FunctionDeclaration` | no | `args, tools` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686595-686605](../../../../../../../reference/runtime/host-main.cjs#L686595-L686605) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:686595

Calls written directly in this body: `JSON.stringify`, `Struct.fromJsonString`, `args.clone`, `coerceArgsToJsonSchema`, `toJsonArgs`, `tools.find`.

Assignment or increment targets: `next.args`.

SHA-256 of the source span: `e270265b8ad57a522dc981bb56d68186b69c1aa7d6d954174ab4b6992735eb6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
