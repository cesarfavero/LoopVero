# `SandAgentIdentityService.requestMint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:495560-495575](../../../../../../../reference/runtime/host-main.cjs#L495560-L495575) | `method` | yes | `create, request5, reportOp = "mint"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495560-495575](../../../../../../../reference/runtime/host-main.cjs#L495560-L495575) | 0 | 0 | 1 | 1 | 1 | 1 |

### host:495560

Calls written directly in this body: `brandedOrInvalidId`, `logFields`, `this.deps.report`, `this.deps.retry.runWithRetry`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `8e93d6bf20e8cbe82cf6684bfb9bdfdf514cccd1abf6b7b17256e59329b83234`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
