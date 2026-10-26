# `slackReadMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735112-735115](../../../../../../../reference/runtime/host-main.cjs#L735112-L735115) | `FunctionDeclaration` | no | `resultText` |
| [evaluation:540686-540689](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540686-L540689) | `FunctionDeclaration` | no | `resultText` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735112-735115](../../../../../../../reference/runtime/host-main.cjs#L735112-L735115) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540686-540689](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540686-L540689) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:735112

Calls written directly in this body: `parseDraftConnectorRecord`.

SHA-256 of the source span: `9cb7b78bb62149b7688e83cadccc5a0f1cc2eca8c4f2f917fa8a218b80d2497c`.

### evaluation:540686

Calls written directly in this body: `parseDraftConnectorRecord`.

SHA-256 of the source span: `c5c26110a4df8f544c4274c6f4719e30143e98981fa6176d6c4a812ab3a615d0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
