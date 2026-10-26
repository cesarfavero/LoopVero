# `resolveSandBrowserSurface`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-surface.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-surface-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776755-776760](../../../../../../../reference/runtime/host-main.cjs#L776755-L776760) | `FunctionDeclaration` | no | `host, decisions` |
| [evaluation:576406-576411](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576406-L576411) | `FunctionDeclaration` | no | `host, decisions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776755-776760](../../../../../../../reference/runtime/host-main.cjs#L776755-L776760) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:576406-576411](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576406-L576411) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:776755

Calls written directly in this body: `decisions.offers`, `executor.isAvailable`, `executor.sharesBrowserTools`, `host.getRemoteBoxAvailable`, `host.isCombinedComputerUseAvailable`, `sandBrowserToolSurface`.

SHA-256 of the source span: `672a68a19a1fc10cc8314cc157bf229dc9e4273eec73ace7adeef843ed0c4822`.

### evaluation:576406

Calls written directly in this body: `decisions.offers`, `executor.isAvailable`, `executor.sharesBrowserTools`, `host.getRemoteBoxAvailable`, `host.isCombinedComputerUseAvailable`, `sandBrowserToolSurface`.

SHA-256 of the source span: `672a68a19a1fc10cc8314cc157bf229dc9e4273eec73ace7adeef843ed0c4822`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
