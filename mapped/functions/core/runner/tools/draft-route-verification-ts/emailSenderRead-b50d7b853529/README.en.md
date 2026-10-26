# `emailSenderRead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735278-735285](../../../../../../../reference/runtime/host-main.cjs#L735278-L735285) | `FunctionDeclaration` | no | `route` |
| [evaluation:540843-540850](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540843-L540850) | `FunctionDeclaration` | no | `route` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735278-735285](../../../../../../../reference/runtime/host-main.cjs#L735278-L735285) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:540843-540850](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540843-L540850) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:735278

Calls written directly in this body: `Object.hasOwn`, `isGrokGmailRoute`.

SHA-256 of the source span: `6e6142aa0eeb9f297e267e205cbfaf087663fe1a2fc78dda99c53010d27600e5`.

### evaluation:540843

Calls written directly in this body: `Object.hasOwn`, `isGrokGmailRoute`.

SHA-256 of the source span: `6e6142aa0eeb9f297e267e205cbfaf087663fe1a2fc78dda99c53010d27600e5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
