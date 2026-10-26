# `takePlaywrightBoxTiming`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743099-743116](../../../../../../../../reference/runtime/host-main.cjs#L743099-L743116) | `FunctionDeclaration` | no | `result` |
| [evaluation:515950-515967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515950-L515967) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743099-743116](../../../../../../../../reference/runtime/host-main.cjs#L743099-L743116) | 4 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:515950-515967](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515950-L515967) | 4 | 0 | 0 | 4 | 0 | 1 |

### host:743099

Calls written directly in this body: `Object.keys`, `boxTimingSchema.safeParse`, `new Struct`, `raw.toJson`.

Assignment or increment targets: `json3`, `success2.structuredContent`.

SHA-256 of the source span: `73ae997197b3924846bf35f401d23127ae56336dbc4bad7f3dff8e8762484538`.

### evaluation:515950

Calls written directly in this body: `Object.keys`, `boxTimingSchema.safeParse`, `new Struct`, `raw.toJson`.

Assignment or increment targets: `json3`, `success2.structuredContent`.

SHA-256 of the source span: `efe703ec58411ec58221cb228a548fccc769d59cb5b25c1f2001ac5fe8655e00`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
