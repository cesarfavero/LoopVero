# `originPrIdentityHostsFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/origin-repo-reference.ts` · [Module README](../../../../../modules/core/cloud-agents/origin-repo-reference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509090-509097](../../../../../../reference/runtime/host-main.cjs#L509090-L509097) | `FunctionDeclaration` | no | `readOriginPrIdentityHosts, callSite` |
| [evaluation:556843-556850](../../../../../../reference/runtime/sand-eval-runner.cjs#L556843-L556850) | `FunctionDeclaration` | no | `readOriginPrIdentityHosts, callSite` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509090-509097](../../../../../../reference/runtime/host-main.cjs#L509090-L509097) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:556843-556850](../../../../../../reference/runtime/sand-eval-runner.cjs#L556843-L556850) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:509090

Calls written directly in this body: `readOriginPrIdentityHosts`.

SHA-256 of the source span: `d0d1112f1aab3dffd09fc8a2865702730cf4ac2782538f24e90114e799df6efc`.

### evaluation:556843

Calls written directly in this body: `readOriginPrIdentityHosts`.

SHA-256 of the source span: `d0d1112f1aab3dffd09fc8a2865702730cf4ac2782538f24e90114e799df6efc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
