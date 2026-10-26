# `readSandBoxBrowserForAnyDisplay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `core/runner/navigation-telemetry.ts` · [Module README](../../../../../modules/core/runner/navigation-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490064-490081](../../../../../../reference/runtime/host-main.cjs#L490064-L490081) | `FunctionDeclaration` | no | `recordPathPrefix, primaryPort` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490064-490081](../../../../../../reference/runtime/host-main.cjs#L490064-L490081) | 3 | 1 | 0 | 4 | 1 | 1 |

### host:490064

Calls written directly in this body: `.filter`, `.map`, `.sort`, `entries.filter`, `findSystemErrno`, `readSandBoxBrowser`.

Assignment or increment targets: `entries`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `ce01fdd01a059f69383fca88dc8f8b1bbddb24d88c8911f31d37416460e72c37`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
