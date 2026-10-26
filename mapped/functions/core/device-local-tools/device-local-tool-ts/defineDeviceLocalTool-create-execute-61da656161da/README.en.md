# `defineDeviceLocalTool/create/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/device-local-tool.ts` · [Module README](../../../../../modules/core/device-local-tools/device-local-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758463-758470](../../../../../../reference/runtime/host-main.cjs#L758463-L758470) | `ArrowFunctionExpression` | yes | `ctx, args, port` |
| [evaluation:548623-548630](../../../../../../reference/runtime/sand-eval-runner.cjs#L548623-L548630) | `ArrowFunctionExpression` | yes | `ctx, args, port` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758463-758470](../../../../../../reference/runtime/host-main.cjs#L758463-L758470) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:548623-548630](../../../../../../reference/runtime/sand-eval-runner.cjs#L548623-L548630) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:758463

Calls written directly in this body: `port.run`, `tool.describeResult`, `tool.inputOf`.

SHA-256 of the source span: `3c376da7228fd2b874e3b40e5bfd3be610d53f47d6213c079caa7edd5cd047e0`.

### evaluation:548623

Calls written directly in this body: `port.run`, `tool.describeResult`, `tool.inputOf`.

SHA-256 of the source span: `3c376da7228fd2b874e3b40e5bfd3be610d53f47d6213c079caa7edd5cd047e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
