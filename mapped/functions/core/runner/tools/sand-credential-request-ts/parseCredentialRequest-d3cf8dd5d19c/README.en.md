# `parseCredentialRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-request.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725478-725516](../../../../../../../reference/runtime/host-main.cjs#L725478-L725516) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725478-725516](../../../../../../../reference/runtime/host-main.cjs#L725478-L725516) | 8 | 0 | 0 | 6 | 0 | 0 |

### host:725478

Calls written directly in this body: `brokeredCredentialRequestSchema.safeParse`, `clampCredentialPurpose`, `credentialRequestSchema.safeParse`, `normalizeCredentialTarget`.

SHA-256 of the source span: `b326fd6db6ffcaac4c030a02975954267f8e74147dfd59db8a32f219363c6262`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
