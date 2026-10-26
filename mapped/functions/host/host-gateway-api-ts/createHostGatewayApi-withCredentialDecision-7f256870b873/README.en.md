# `createHostGatewayApi/withCredentialDecision`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/host-gateway-api.ts` · [Module README](../../../../modules/host/host-gateway-api-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:492342-492350](../../../../../reference/runtime/host-main.cjs#L492342-L492350) | `ArrowFunctionExpression` | yes | `entryId, alreadyInFlight, decide` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492342-492350](../../../../../reference/runtime/host-main.cjs#L492342-L492350) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:492342

Calls written directly in this body: `credentialDecisionsInFlight.add`, `credentialDecisionsInFlight.delete`, `credentialDecisionsInFlight.has`, `decide`.

SHA-256 of the source span: `dd8a683e0bfbd85e6608d81f007f01e1ad7563af2fa030cd66a25cf10eed0c5c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
