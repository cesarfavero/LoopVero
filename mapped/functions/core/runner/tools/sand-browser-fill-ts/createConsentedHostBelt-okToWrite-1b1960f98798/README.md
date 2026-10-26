# `createConsentedHostBelt/okToWrite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727380-727395](../../../../../../../reference/runtime/host-main.cjs#L727380-L727395) | `FunctionExpression` | sim | `(nenhum)` |
| [evaluation:561886-561901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561886-L561901) | `FunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727380-727395](../../../../../../../reference/runtime/host-main.cjs#L727380-L727395) | 6 | 0 | 2 | 7 | 0 | 0 |
| [evaluation:561886-561901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561886-L561901) | 6 | 0 | 2 | 7 | 0 | 0 |

### host:727380

Chamadas escritas diretamente neste corpo: `anchorFirstOnHostUrlAndMarkMovedWhenALaterOneDiffers`, `hostMatchesConsentedUserFormHost`, `livePageHostOf`, `markLost`, `runner.run`, `selectTabOnConsentedHost`.

SHA-256 do trecho: `8150d849e348be1b84356c382647094a0fa9e205e1cccab1f45936bd526f245e`.

### evaluation:561886

Chamadas escritas diretamente neste corpo: `anchorFirstOnHostUrlAndMarkMovedWhenALaterOneDiffers`, `hostMatchesConsentedUserFormHost`, `livePageHostOf`, `markLost`, `runner.run`, `selectTabOnConsentedHost`.

SHA-256 do trecho: `8150d849e348be1b84356c382647094a0fa9e205e1cccab1f45936bd526f245e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
