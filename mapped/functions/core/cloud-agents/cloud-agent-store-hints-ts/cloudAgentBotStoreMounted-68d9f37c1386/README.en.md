# `cloudAgentBotStoreMounted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-store-hints.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-store-hints-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538094-538098](../../../../../../reference/runtime/host-main.cjs#L538094-L538098) | `FunctionDeclaration` | no | `mountedAgentStores` |
| [evaluation:490203-490207](../../../../../../reference/runtime/sand-eval-runner.cjs#L490203-L490207) | `FunctionDeclaration` | no | `mountedAgentStores` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538094-538098](../../../../../../reference/runtime/host-main.cjs#L538094-L538098) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490203-490207](../../../../../../reference/runtime/sand-eval-runner.cjs#L490203-L490207) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:538094

Calls written directly in this body: `mountedAgentStores.some`.

SHA-256 of the source span: `5c3c56f011fd772b3a11028ba74ca46ad926e4e62e9c5c7aa85fda5eb39b36a5`.

### evaluation:490203

Calls written directly in this body: `mountedAgentStores.some`.

SHA-256 of the source span: `5c3c56f011fd772b3a11028ba74ca46ad926e4e62e9c5c7aa85fda5eb39b36a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
