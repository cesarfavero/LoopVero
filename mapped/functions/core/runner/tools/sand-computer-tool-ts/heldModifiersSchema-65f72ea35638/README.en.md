# `heldModifiersSchema`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776890-776895](../../../../../../../reference/runtime/host-main.cjs#L776890-L776895) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:576535-576540](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576535-L576540) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776890-776895](../../../../../../../reference/runtime/host-main.cjs#L776890-L776895) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576535-576540](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576535-L576540) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776890

Calls written directly in this body: `.refine`, `.transform`, `HELD_MODIFIER_KEYS.join`, `external_exports2.string`.

SHA-256 of the source span: `09c797f7a190ad05cf4a9dd94c021b3c624bf71ff2800cc8cee8af049114ed65`.

### evaluation:576535

Calls written directly in this body: `.refine`, `.transform`, `HELD_MODIFIER_KEYS.join`, `external_exports3.string`.

SHA-256 of the source span: `17fc9b253ca964c380778c6017c468d66a4c630bdff041eb89b579493b31bb4c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
