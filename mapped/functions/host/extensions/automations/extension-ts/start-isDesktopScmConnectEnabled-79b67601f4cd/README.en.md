# `start/isDesktopScmConnectEnabled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/extension.ts` · [Module README](../../../../../../modules/host/extensions/automations/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505979-505981](../../../../../../../reference/runtime/host-main.cjs#L505979-L505981) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505979-505981](../../../../../../../reference/runtime/host-main.cjs#L505979-L505981) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:505979 uses an implicit arrow-function return.

### host:505979

Calls written directly in this body: `context2.deps.experiments.checkFeatureGate`.

SHA-256 of the source span: `06bcf42a7211bf0e8e930efe2bddf68f6425e98bb5155ff46fb0a2806a9aa087`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
