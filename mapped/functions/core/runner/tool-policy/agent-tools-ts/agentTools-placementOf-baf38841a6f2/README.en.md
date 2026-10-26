# `agentTools/placementOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-tools.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756583-756587](../../../../../../../reference/runtime/host-main.cjs#L756583-L756587) | `ArrowFunctionExpression` | no | `tool` |
| [evaluation:542503-542507](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542503-L542507) | `ArrowFunctionExpression` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756583-756587](../../../../../../../reference/runtime/host-main.cjs#L756583-L756587) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:542503-542507](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542503-L542507) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:756583

Calls written directly in this body: `behindLookup`, `hints.get`.

SHA-256 of the source span: `a65f01d9ee8256d92c911e1251781fe9f6f9fb1b27e07e3e0bd97f85be7fb8de`.

### evaluation:542503

Calls written directly in this body: `behindLookup`, `hints.get`.

SHA-256 of the source span: `a65f01d9ee8256d92c911e1251781fe9f6f9fb1b27e07e3e0bd97f85be7fb8de`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
