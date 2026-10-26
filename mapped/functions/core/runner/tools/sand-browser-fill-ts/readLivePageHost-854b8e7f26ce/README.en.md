# `readLivePageHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727299-727301](../../../../../../../reference/runtime/host-main.cjs#L727299-L727301) | `FunctionDeclaration` | yes | `ctx, runner` |
| [evaluation:561805-561807](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561805-L561807) | `FunctionDeclaration` | yes | `ctx, runner` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727299-727301](../../../../../../../reference/runtime/host-main.cjs#L727299-L727301) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:561805-561807](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561805-L561807) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:727299

Calls written directly in this body: `livePageHostOf`, `runner.run`.

SHA-256 of the source span: `2c641823b452d8068391c993d4590e81a35f06aef66d201236dc1b1ba8810aa7`.

### evaluation:561805

Calls written directly in this body: `livePageHostOf`, `runner.run`.

SHA-256 of the source span: `2c641823b452d8068391c993d4590e81a35f06aef66d201236dc1b1ba8810aa7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
