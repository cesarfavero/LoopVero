# `AgentMediaRootObservability.stop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/agent-media-root-observability.ts` · [Module README](../../../../modules/host/agent-media-root-observability-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723844-723847](../../../../../reference/runtime/host-main.cjs#L723844-L723847) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723844-723847](../../../../../reference/runtime/host-main.cjs#L723844-L723847) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:723844

Calls written directly in this body: `this.lifetime.abort`, `this.waitForProbes`.

SHA-256 of the source span: `8472c3fad7f7edc1a3d51195050f0d5d736920bd837d8061b5e16a99282022b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
