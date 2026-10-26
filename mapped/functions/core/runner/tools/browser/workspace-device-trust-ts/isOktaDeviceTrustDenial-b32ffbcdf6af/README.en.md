# `isOktaDeviceTrustDenial`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/workspace-device-trust.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/workspace-device-trust-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743298-743300](../../../../../../../../reference/runtime/host-main.cjs#L743298-L743300) | `FunctionDeclaration` | no | `path33, title` |
| [evaluation:516149-516151](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516149-L516151) | `FunctionDeclaration` | no | `path33, title` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743298-743300](../../../../../../../../reference/runtime/host-main.cjs#L743298-L743300) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516149-516151](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516149-L516151) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:743298

Calls written directly in this body: `DEVICE_TRUST_TITLE.test`, `path33.includes`.

SHA-256 of the source span: `4f21998d9127473530179fbcf97fe3fa2871614c10a3ef323d07961933390dfb`.

### evaluation:516149

Calls written directly in this body: `DEVICE_TRUST_TITLE.test`, `path33.includes`.

SHA-256 of the source span: `4f21998d9127473530179fbcf97fe3fa2871614c10a3ef323d07961933390dfb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
