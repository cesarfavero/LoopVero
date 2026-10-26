# `hostOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/workspace-device-trust.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/workspace-device-trust-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743295-743297](../../../../../../../../reference/runtime/host-main.cjs#L743295-L743297) | `FunctionDeclaration` | no | `url2` |
| [evaluation:516146-516148](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516146-L516148) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743295-743297](../../../../../../../../reference/runtime/host-main.cjs#L743295-L743297) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:516146-516148](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516146-L516148) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:743295

Calls written directly in this body: `.replace`, `url2.hostname.toLowerCase`.

SHA-256 of the source span: `b946a311c0a339bbe3f4e9b0dd11e67ad5ee2e147a19c3d61830db7a8a5f4ba2`.

### evaluation:516146

Calls written directly in this body: `.replace`, `url2.hostname.toLowerCase`.

SHA-256 of the source span: `b946a311c0a339bbe3f4e9b0dd11e67ad5ee2e147a19c3d61830db7a8a5f4ba2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
