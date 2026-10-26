# `BoxHandoffService.start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/box-handoff-service.ts` · [Module README](../../../../../../modules/host/extensions/session/box-handoff-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728273-728305](../../../../../../../reference/runtime/host-main.cjs#L728273-L728305) | `method` | no | `request5` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728273-728305](../../../../../../../reference/runtime/host-main.cjs#L728273-L728305) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:728273

Calls written directly in this body: `Date.now`, `assertValidSandAgentId`, `boxHelpFacts`, `boxHelpRequest.increment`, `crypto.randomUUID`, `this.armWebAuthnForHandoff`, `this.deps.onStarted`, `this.deps.onStatusChanged`, `this.deps.telemetry.egressRoute`, `this.domainTags`, `this.pending.get`, `this.pending.set`, `this.reportBoxHelp`.

SHA-256 of the source span: `9524b9e93d7713ffffe6ca42feee311d74ede40c06be61e3bfbada2e58138ce8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
