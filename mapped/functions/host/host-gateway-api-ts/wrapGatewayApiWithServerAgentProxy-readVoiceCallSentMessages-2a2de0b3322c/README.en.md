# `wrapGatewayApiWithServerAgentProxy/readVoiceCallSentMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492277-492282](../../../../../reference/runtime/host-main.cjs#L492277-L492282) | `ArrowFunctionExpression` | yes | `readArgs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492277-492282](../../../../../reference/runtime/host-main.cjs#L492277-L492282) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:492277

Calls written directly in this body: `VoiceCallWrittenMessages.recall`, `api.readVoiceCallSentMessages`, `proxy.isProxiedAgent`.

SHA-256 of the source span: `d48cc8602a944f6bd8a311cb190f69fb291e396b3a88e82ca3e2e895af8ce8bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
