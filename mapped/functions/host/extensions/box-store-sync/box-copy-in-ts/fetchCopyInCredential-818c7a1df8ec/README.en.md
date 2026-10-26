# `fetchCopyInCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483626-483639](../../../../../../../reference/runtime/host-main.cjs#L483626-L483639) | `FunctionDeclaration` | yes | `env, backend` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483626-483639](../../../../../../../reference/runtime/host-main.cjs#L483626-L483639) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:483626

Calls written directly in this body: `env[computed].trim`, `new SandBoxStoreSyncError`, `readDevInferenceCredentialFile`, `renewSandBoxInferenceCredential`.

Explicit throw targets: `SandBoxStoreSyncError`.

SHA-256 of the source span: `dd35bd509acc387b3e42c11b102d1e093d50f2a6186689c99c00c612371816bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
