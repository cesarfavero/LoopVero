# `resolveBoxComputerRuntime`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/builtin-mcp.ts` · [Module README](../../../../../../modules/shared/node/mcp/builtin-mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451454-451466](../../../../../../../reference/runtime/host-main.cjs#L451454-L451466) | `FunctionDeclaration` | no | `opts, env` |
| [evaluation:597058-597070](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597058-L597070) | `FunctionDeclaration` | no | `opts, env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451454-451466](../../../../../../../reference/runtime/host-main.cjs#L451454-L451466) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:597058-597070](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597058-L597070) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:451454

Calls written directly in this body: `env.SAND_BOX_COMPUTER_DOCKER_HOST.trim`, `env.SAND_BOX_COMPUTER_SHARED_CONTAINER.trim`, `hostOverrideRaw.toLowerCase`, `isTruthyFlag`.

SHA-256 of the source span: `1a743616198b3aef31ad88fccf65e61db4723845c9967f10678a12b9e18cf8e4`.

### evaluation:597058

Calls written directly in this body: `env.SAND_BOX_COMPUTER_DOCKER_HOST.trim`, `env.SAND_BOX_COMPUTER_SHARED_CONTAINER.trim`, `hostOverrideRaw.toLowerCase`, `isTruthyFlag`.

SHA-256 of the source span: `1a743616198b3aef31ad88fccf65e61db4723845c9967f10678a12b9e18cf8e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
