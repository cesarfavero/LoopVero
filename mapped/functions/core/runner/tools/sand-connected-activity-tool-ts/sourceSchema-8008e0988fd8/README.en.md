# `sourceSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-connected-activity-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763685-763691](../../../../../../../reference/runtime/host-main.cjs#L763685-L763691) | `FunctionDeclaration` | no | `sources` |
| [evaluation:556733-556739](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556733-L556739) | `FunctionDeclaration` | no | `sources` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763685-763691](../../../../../../../reference/runtime/host-main.cjs#L763685-L763691) | 1 | 0 | 0 | 1 | 1 | 0 |
| [evaluation:556733-556739](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556733-L556739) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:763685

Calls written directly in this body: `external_exports2.enum`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `a740af041741372ecf00ab4411658a51091eceaa9f05fb7a6988a42a110bab7a`.

### evaluation:556733

Calls written directly in this body: `external_exports3.enum`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `de515ae469a08cf1b3166f6fd81249f411c97df4fffff59afbaf214932154433`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
