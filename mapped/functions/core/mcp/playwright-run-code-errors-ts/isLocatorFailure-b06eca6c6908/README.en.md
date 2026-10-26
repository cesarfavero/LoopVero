# `isLocatorFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700144-700150](../../../../../../reference/runtime/host-main.cjs#L700144-L700150) | `FunctionDeclaration` | no | `head` |
| [evaluation:513922-513928](../../../../../../reference/runtime/sand-eval-runner.cjs#L513922-L513928) | `FunctionDeclaration` | no | `head` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700144-700150](../../../../../../reference/runtime/host-main.cjs#L700144-L700150) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:513922-513928](../../../../../../reference/runtime/sand-eval-runner.cjs#L513922-L513928) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:700144

Calls written directly in this body: `LOCATOR_APIS.has`, `SELECTOR_TAKING_METHODS.has`, `STRICT_MODE_DETAIL.test`.

SHA-256 of the source span: `aa1ee037aa13e7532a3279fff9a99d81746815958bb0f0f41d2e2abb6fbe6375`.

### evaluation:513922

Calls written directly in this body: `LOCATOR_APIS.has`, `SELECTOR_TAKING_METHODS.has`, `STRICT_MODE_DETAIL.test`.

SHA-256 of the source span: `aa1ee037aa13e7532a3279fff9a99d81746815958bb0f0f41d2e2abb6fbe6375`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
