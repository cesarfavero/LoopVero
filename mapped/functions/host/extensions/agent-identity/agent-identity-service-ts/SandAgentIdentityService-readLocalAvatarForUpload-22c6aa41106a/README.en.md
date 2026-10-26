# `SandAgentIdentityService.readLocalAvatarForUpload`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496179-496188](../../../../../../../reference/runtime/host-main.cjs#L496179-L496188) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496179-496188](../../../../../../../reference/runtime/host-main.cjs#L496179-L496188) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:496179

Calls written directly in this body: `createAvatarDataUrl`, `errorMessage`, `this.deps.getLocalAvatar`, `this.deps.log`.

Assignment or increment targets: `dataUrl`.

SHA-256 of the source span: `51b51f928ac445cc40d564b5a772f518165c293572fd5b13868da03f1f737c01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
