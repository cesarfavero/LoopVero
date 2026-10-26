# `renderCardMessageBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760871-760899](../../../../../../../reference/runtime/host-main.cjs#L760871-L760899) | `FunctionDeclaration` | no | `rawArgs, deps, lead, cards, { shopping, shipment }` |
| [evaluation:551686-551714](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551686-L551714) | `FunctionDeclaration` | no | `rawArgs, deps, lead, cards, { shopping, shipment }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760871-760899](../../../../../../../reference/runtime/host-main.cjs#L760871-L760899) | 9 | 0 | 0 | 2 | 3 | 0 |
| [evaluation:551686-551714](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551686-L551714) | 9 | 0 | 0 | 2 | 3 | 0 |

### host:760871

Calls written directly in this body: `buildRenderCardContent`, `deps.renderCards.stored`, `distinctRenderCardEntries`, `entries.filter`, `entries.map`, `findRenderCardRestatement`, `lead.trim`, `new SandToolInputError`, `shipmentLinkInText`, `shoppingLinkInText`, `shown.map`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `a031f7e8773bfbbdb94326977aafe1d3110a4cea591386c0c680cb111261d051`.

### evaluation:551686

Calls written directly in this body: `buildRenderCardContent`, `deps.renderCards.stored`, `distinctRenderCardEntries`, `entries.filter`, `entries.map`, `findRenderCardRestatement`, `lead.trim`, `new SandToolInputError`, `shipmentLinkInText`, `shoppingLinkInText`, `shown.map`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `a031f7e8773bfbbdb94326977aafe1d3110a4cea591386c0c680cb111261d051`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
