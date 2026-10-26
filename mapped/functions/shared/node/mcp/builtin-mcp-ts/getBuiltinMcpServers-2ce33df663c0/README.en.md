# `getBuiltinMcpServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/builtin-mcp.ts` · [Module README](../../../../../../modules/shared/node/mcp/builtin-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451508-451529](../../../../../../../reference/runtime/host-main.cjs#L451508-L451529) | `FunctionDeclaration` | no | `environment` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451508-451529](../../../../../../../reference/runtime/host-main.cjs#L451508-L451529) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:451508

Calls written directly in this body: `buildBoxComputerEnv`, `resolveBoxComputerNodeCommand`.

Assignment or increment targets: `env.ELECTRON_RUN_AS_NODE`.

SHA-256 of the source span: `3a0018f7445861a5af003559bb2fa36320d29d55fefa938fbf2c49eb898df0a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
