# `createHostGatewayApi/mintAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492351-492402](../../../../../reference/runtime/host-main.cjs#L492351-L492402) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492351-492402](../../../../../reference/runtime/host-main.cjs#L492351-L492402) | 13 | 0 | 3 | 1 | 1 | 1 |

### host:492351

Calls written directly in this body: `.analytics.markActive`, `.analytics.trackEvent`, `brandedId`, `deps.extensions.api`, `identity.createRemoteAgentFirst`, `identity.isWriteEnabled`, `identity.noteAgentMinted`, `identity.rollbackRemoteAgent`, `isSandAgentPurpose`, `manager.createAgent`, `sandAgentAnalyticsOrigin`, `sanitizeTemplateId`.

Assignment or increment targets: `config2`, `createOptions`, `result`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `0afac1f0075a22d686d2e0969d74109752337a73d9d84905fd0552eef5485ab1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
