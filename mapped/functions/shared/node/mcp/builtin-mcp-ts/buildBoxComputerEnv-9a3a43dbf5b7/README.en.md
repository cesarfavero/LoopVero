# `buildBoxComputerEnv`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/builtin-mcp.ts` · [Module README](../../../../../../modules/shared/node/mcp/builtin-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451475-451494](../../../../../../../reference/runtime/host-main.cjs#L451475-L451494) | `FunctionDeclaration` | no | `environment` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451475-451494](../../../../../../../reference/runtime/host-main.cjs#L451475-L451494) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:451475

Calls written directly in this body: `Object.entries`.

Assignment or increment targets: `env.BOX_COMPUTER_BACKEND`, `env.BOX_COMPUTER_SHARED_CONTAINER_NAME`, `env.DOCKER_HOST`, `env.SAND_BOX_COMPUTER`, `env[computed]`.

SHA-256 of the source span: `2c0b1761b9e67fe0763e5e285ec240b7a8c32695d25e784cfe7ada7a6ecdfbfa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
