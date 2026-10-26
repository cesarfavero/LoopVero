# `BoxHandoffService.armWebAuthnForHandoff`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/box-handoff-service.ts` · [Module README](../../../../../../modules/host/extensions/session/box-handoff-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728306-728325](../../../../../../../reference/runtime/host-main.cjs#L728306-L728325) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728306-728325](../../../../../../../reference/runtime/host-main.cjs#L728306-L728325) | 0 | 0 | 1 | 0 | 0 | 1 |

### host:728306

Calls written directly in this body: `.encode`, `.log`, `Date.now`, `errorLogTag`, `new Date`, `new TextEncoder`, `this.deps.box.uploadFile`, `this.deps.ctx.get`.

SHA-256 of the source span: `6910314b160c2c19cab65957ba411119bd0c7497ba0b0a693c66dacffbd144a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
