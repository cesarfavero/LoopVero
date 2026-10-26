# `CredentialCoordinator.resolveBrowserTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-provider/credential-coordinator.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/credential-coordinator-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548414-548450](../../../../../../../reference/runtime/host-main.cjs#L548414-L548450) | `method` | yes | `item, siteHint, windowIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548414-548450](../../../../../../../reference/runtime/host-main.cjs#L548414-L548450) | 7 | 0 | 1 | 2 | 1 | 1 |

### host:548414

Calls written directly in this body: `this.auditAgentAccess`, `this.log`, `this.options.resolveBrowserTarget`.

Assignment or increment targets: `result`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `438a3917830abedbf3649b2c88ac336fdbdbad228076c4c48f7d1b9933339f28`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
