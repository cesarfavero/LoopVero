# `annotateWorkspaceDeviceTrustDenial`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/workspace-device-trust.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/workspace-device-trust-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743329-743337](../../../../../../../../reference/runtime/host-main.cjs#L743329-L743337) | `FunctionDeclaration` | no | `text3` |
| [evaluation:516180-516188](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516180-L516188) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743329-743337](../../../../../../../../reference/runtime/host-main.cjs#L743329-L743337) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:516180-516188](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516180-L516188) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:743329

Calls written directly in this body: `.find`, `.map`, `pagesIn`, `text3.includes`, `workspaceDeviceTrustDenialMessage`.

SHA-256 of the source span: `b84b372c6234d40faa935eca8856d9234bf468edbd0eaa5e860eb07f1fb83f83`.

### evaluation:516180

Calls written directly in this body: `.find`, `.map`, `pagesIn`, `text3.includes`, `workspaceDeviceTrustDenialMessage`.

SHA-256 of the source span: `b84b372c6234d40faa935eca8856d9234bf468edbd0eaa5e860eb07f1fb83f83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
