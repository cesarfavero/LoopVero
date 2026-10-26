# `resolveSendMessageOpen`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message/open.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/send-message/open-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557838-557868](../../../../../../../../reference/runtime/host-main.cjs#L557838-L557868) | `FunctionDeclaration` | não | `raw, context2` |
| [evaluation:550652-550682](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L550652-L550682) | `FunctionDeclaration` | não | `raw, context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557838-557868](../../../../../../../../reference/runtime/host-main.cjs#L557838-L557868) | 7 | 0 | 0 | 1 | 6 | 0 |
| [evaluation:550652-550682](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L550652-L550682) | 7 | 0 | 0 | 1 | 6 | 0 |

### host:557838

Chamadas escritas diretamente neste corpo: `OPENABLE_ROUTES.has`, `moveAllowedForRequestSource`, `openRefused`, `sandDeepLinks.parse`, `sandUiFactsForToolDescription`, `taught.includes`, `taught.join`, `taughtSettingsAnchorIds`.

Alvos de lançamento explícito: `openRefused`.

SHA-256 do trecho: `04ece11fe62a42bc02b147eaead4174f9da20a4d17ddb83011e5848dda3abbbd`.

### evaluation:550652

Chamadas escritas diretamente neste corpo: `OPENABLE_ROUTES.has`, `moveAllowedForRequestSource`, `openRefused`, `sandDeepLinks.parse`, `sandUiFactsForToolDescription`, `taught.includes`, `taught.join`, `taughtSettingsAnchorIds`.

Alvos de lançamento explícito: `openRefused`.

SHA-256 do trecho: `04ece11fe62a42bc02b147eaead4174f9da20a4d17ddb83011e5848dda3abbbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
