# `createHostAuthService`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/auth-service.ts` · [Module README](../../../../../../modules/host/extensions/auth/auth-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499214-499298](../../../../../../../reference/runtime/host-main.cjs#L499214-L499298) | `FunctionDeclaration` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499214-499298](../../../../../../../reference/runtime/host-main.cjs#L499214-L499298) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:499214

Calls written directly in this body: `new InferenceCredentialStore`, `new SandInferenceCredentialRenewer`, `new Set`, `options2.log`, `renewer.start`.

SHA-256 of the source span: `68e7a138f15255f631ff0bcbb6e35cdb87f9679b5325c4f9f7660fcd7a0df239`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
