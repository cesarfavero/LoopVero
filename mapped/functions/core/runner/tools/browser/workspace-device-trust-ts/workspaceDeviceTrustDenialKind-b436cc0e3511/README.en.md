# `workspaceDeviceTrustDenialKind`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/workspace-device-trust.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/workspace-device-trust-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743301-743315](../../../../../../../../reference/runtime/host-main.cjs#L743301-L743315) | `FunctionDeclaration` | no | `page` |
| [evaluation:516152-516166](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516152-L516166) | `FunctionDeclaration` | no | `page` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743301-743315](../../../../../../../../reference/runtime/host-main.cjs#L743301-L743315) | 5 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:516152-516166](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516152-L516166) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:743301

Calls written directly in this body: `URL.canParse`, `host.endsWith`, `hostOf`, `isOktaDeviceTrustDenial`, `new URL`, `normalize5`, `path33.includes`, `title.startsWith`, `url2.pathname.toLowerCase`.

SHA-256 of the source span: `f69d5d1e36a589dc39b3e91e72e742960f448be50136adc0cf2a5071605bdb6c`.

### evaluation:516152

Calls written directly in this body: `URL.canParse`, `host.endsWith`, `hostOf`, `isOktaDeviceTrustDenial`, `new URL`, `normalize4`, `path33.includes`, `title.startsWith`, `url2.pathname.toLowerCase`.

SHA-256 of the source span: `36fa4c94ddc464d65887457cdbfd1ebd961c9b36dec1f1cfa211246aa2335351`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
