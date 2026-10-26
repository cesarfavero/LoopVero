# `parseAuthedWorkspace`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735131-735138](../../../../../../../reference/runtime/host-main.cjs#L735131-L735138) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540705-540712](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540705-L540712) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735131-735138](../../../../../../../reference/runtime/host-main.cjs#L735131-L735138) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540705-540712](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540705-L540712) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:735131

Calls written directly in this body: `/^Email:\s*(\S+@\S+)$/m.exec`, `/^Organization Name:\s*(.+)$/m.exec`, `[computed].trim`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `3c92fe6a76dd5afd1f74ab1c59bff10f11ad548ff2e6d8b6d19698deee3610d5`.

### evaluation:540705

Calls written directly in this body: `/^Email:\s*(\S+@\S+)$/m.exec`, `/^Organization Name:\s*(.+)$/m.exec`, `[computed].trim`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `3c92fe6a76dd5afd1f74ab1c59bff10f11ad548ff2e6d8b6d19698deee3610d5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
