# `isScmReconnectShapedRejection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509214-509218](../../../../../../../reference/runtime/host-main.cjs#L509214-L509218) | `FunctionDeclaration` | no | `rejection` |
| [evaluation:556939-556943](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556939-L556943) | `FunctionDeclaration` | no | `rejection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509214-509218](../../../../../../../reference/runtime/host-main.cjs#L509214-L509218) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556939-556943](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556939-L556943) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509214

Calls written directly in this body: `/please reconnect (github|gitlab|bitbucket|azure|your source control integration)/i.test`.

SHA-256 of the source span: `65edc573543dc44fa42f3662f4752bbdcfdc11f0350b601fb9fa52cc28ba4d8f`.

### evaluation:556939

Calls written directly in this body: `/please reconnect (github|gitlab|bitbucket|azure|your source control integration)/i.test`.

SHA-256 of the source span: `65edc573543dc44fa42f3662f4752bbdcfdc11f0350b601fb9fa52cc28ba4d8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
