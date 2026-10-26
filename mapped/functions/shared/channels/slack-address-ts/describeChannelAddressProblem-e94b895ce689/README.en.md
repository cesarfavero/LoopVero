# `describeChannelAddressProblem`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/slack-address.ts` · [Module README](../../../../../modules/shared/channels/slack-address-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757561-757575](../../../../../../reference/runtime/host-main.cjs#L757561-L757575) | `FunctionDeclaration` | no | `address` |
| [evaluation:543582-543596](../../../../../../reference/runtime/sand-eval-runner.cjs#L543582-L543596) | `FunctionDeclaration` | no | `address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757561-757575](../../../../../../reference/runtime/host-main.cjs#L757561-L757575) | 4 | 0 | 0 | 5 | 1 | 1 |
| [evaluation:543582-543596](../../../../../../reference/runtime/sand-eval-runner.cjs#L543582-L543596) | 4 | 0 | 0 | 5 | 1 | 1 |

### host:757561

Calls written directly in this body: `describeTeamsChannelAddressProblem`, `parseChannelAddress`, `parseSlackChatTarget`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `af54a258f7498d4a9e6ae873e84af4eb0d7c920e935700676ebd97785ae194ca`.

### evaluation:543582

Calls written directly in this body: `describeTeamsChannelAddressProblem`, `parseChannelAddress`, `parseSlackChatTarget`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `933e37984b7ae0c6fa33f5003abb3d0779dc8b4008942c754e80980dbf0a5d21`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
