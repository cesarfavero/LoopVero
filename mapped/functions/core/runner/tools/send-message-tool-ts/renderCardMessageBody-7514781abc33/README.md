# `renderCardMessageBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760871-760899](../../../../../../../reference/runtime/host-main.cjs#L760871-L760899) | `FunctionDeclaration` | não | `rawArgs, deps, lead, cards, { shopping, shipment }` |
| [evaluation:551686-551714](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551686-L551714) | `FunctionDeclaration` | não | `rawArgs, deps, lead, cards, { shopping, shipment }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760871-760899](../../../../../../../reference/runtime/host-main.cjs#L760871-L760899) | 9 | 0 | 0 | 2 | 3 | 0 |
| [evaluation:551686-551714](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551686-L551714) | 9 | 0 | 0 | 2 | 3 | 0 |

### host:760871

Chamadas escritas diretamente neste corpo: `buildRenderCardContent`, `deps.renderCards.stored`, `distinctRenderCardEntries`, `entries.filter`, `entries.map`, `findRenderCardRestatement`, `lead.trim`, `new SandToolInputError`, `shipmentLinkInText`, `shoppingLinkInText`, `shown.map`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `a031f7e8773bfbbdb94326977aafe1d3110a4cea591386c0c680cb111261d051`.

### evaluation:551686

Chamadas escritas diretamente neste corpo: `buildRenderCardContent`, `deps.renderCards.stored`, `distinctRenderCardEntries`, `entries.filter`, `entries.map`, `findRenderCardRestatement`, `lead.trim`, `new SandToolInputError`, `shipmentLinkInText`, `shoppingLinkInText`, `shown.map`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `a031f7e8773bfbbdb94326977aafe1d3110a4cea591386c0c680cb111261d051`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
