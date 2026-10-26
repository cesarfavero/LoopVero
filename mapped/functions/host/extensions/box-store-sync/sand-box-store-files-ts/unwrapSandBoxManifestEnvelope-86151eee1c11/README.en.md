# `unwrapSandBoxManifestEnvelope`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474661-474671](../../../../../../../reference/runtime/host-main.cjs#L474661-L474671) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474661-474671](../../../../../../../reference/runtime/host-main.cjs#L474661-L474671) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:474661

Calls written directly in this body: `.toString`, `Buffer.from`, `JSON.parse`, `fencedManifestWriterEnvelopeSchema.safeParse`, `new Uint8Array`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `a8d869bed167a2f57de58bb8509773429968eb2e4327c31482bc770008841cca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
