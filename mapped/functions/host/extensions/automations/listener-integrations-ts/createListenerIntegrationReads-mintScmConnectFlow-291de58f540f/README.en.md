# `createListenerIntegrationReads/mintScmConnectFlow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/listener-integrations.ts` · [Module README](../../../../../../modules/host/extensions/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505402-505423](../../../../../../../reference/runtime/host-main.cjs#L505402-L505423) | `ArrowFunctionExpression` | yes | `fields3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505402-505423](../../../../../../../reference/runtime/host-main.cjs#L505402-L505423) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:505402

Calls written directly in this body: `.catch`, `.digest`, `.next`, `.prepareGithubConnectFlow`, `.toString`, `.update`, `dashboard`, `invariant`, `new PrepareGithubConnectFlowRequest`, `verifierByMintedState.delete`, `verifierByMintedState.keys`, `verifierByMintedState.set`.

SHA-256 of the source span: `62b7d066c7da3e23e9ce12be862f6bca30f08ca366a525e2eaccac1b2651adc5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
