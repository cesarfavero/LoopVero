# `userFormWriteFrameHosts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727129-727137](../../../../../../../reference/runtime/host-main.cjs#L727129-L727137) | `FunctionDeclaration` | no | `consentedHost` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727129-727137](../../../../../../../reference/runtime/host-main.cjs#L727129-L727137) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:727129

Calls written directly in this body: `.toLowerCase`, `consented.replace`, `consentedHost.trim`, `isLoopbackUserFormHost`.

SHA-256 of the source span: `b96c6f5f34fe7d7444034249d8874469e10771b48a05f783d0877caa1949e970`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
