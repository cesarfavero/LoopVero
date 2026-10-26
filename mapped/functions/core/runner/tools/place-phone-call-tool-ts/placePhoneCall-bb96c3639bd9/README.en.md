# `placePhoneCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/place-phone-call-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/place-phone-call-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763640-763663](../../../../../../../reference/runtime/host-main.cjs#L763640-L763663) | `FunctionDeclaration` | yes | `deps, args` |
| [evaluation:556682-556705](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556682-L556705) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763640-763663](../../../../../../../reference/runtime/host-main.cjs#L763640-L763663) | 4 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:556682-556705](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556682-L556705) | 4 | 0 | 3 | 4 | 0 | 0 |

### host:763640

Calls written directly in this body: `declaredPurposes.increment`, `deps.outboundCall.checkEligibility`, `deps.outboundCall.placeCall`, `deps.reviewCall`, `part`, `whatToTellTheUser`.

SHA-256 of the source span: `8467efc7069dfaf2bb8d0f103ccacdbf92611d9ec143e77d109001e0a1f42ab4`.

### evaluation:556682

Calls written directly in this body: `declaredPurposes.increment`, `deps.outboundCall.checkEligibility`, `deps.outboundCall.placeCall`, `deps.reviewCall`, `part`, `whatToTellTheUser`.

SHA-256 of the source span: `8467efc7069dfaf2bb8d0f103ccacdbf92611d9ec143e77d109001e0a1f42ab4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
