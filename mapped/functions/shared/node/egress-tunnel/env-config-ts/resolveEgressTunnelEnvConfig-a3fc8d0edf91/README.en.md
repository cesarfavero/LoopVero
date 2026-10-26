# `resolveEgressTunnelEnvConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/egress-tunnel/env-config.ts` · [Module README](../../../../../../modules/shared/node/egress-tunnel/env-config-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451417-451428](../../../../../../../reference/runtime/host-main.cjs#L451417-L451428) | `FunctionDeclaration` | no | `env` |
| [evaluation:597024-597035](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597024-L597035) | `FunctionDeclaration` | no | `env` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451417-451428](../../../../../../../reference/runtime/host-main.cjs#L451417-L451428) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:597024-597035](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597024-L597035) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:451417

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `b0adde8a0b3b8a4e45a9626d573d80784ee1a9bcd0b651e054f0b9cc8eca18e7`.

### evaluation:597024

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `b0adde8a0b3b8a4e45a9626d573d80784ee1a9bcd0b651e054f0b9cc8eca18e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
