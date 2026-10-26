# `createConsentedHostBelt/trustResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727396-727404](../../../../../../../reference/runtime/host-main.cjs#L727396-L727404) | `FunctionExpression` | não | `result` |
| [evaluation:561902-561910](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561902-L561910) | `FunctionExpression` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727396-727404](../../../../../../../reference/runtime/host-main.cjs#L727396-L727404) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:561902-561910](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561902-L561910) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:727396

Chamadas escritas diretamente neste corpo: `anchorFirstOnHostUrlAndMarkMovedWhenALaterOneDiffers`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `markLost`.

SHA-256 do trecho: `52a71a2878c511ca6a1b90cef38170fe56915b528aaf39fa5183e9ed234671f0`.

### evaluation:561902

Chamadas escritas diretamente neste corpo: `anchorFirstOnHostUrlAndMarkMovedWhenALaterOneDiffers`, `fillableHostOfUrl`, `hostMatchesConsentedUserFormHost`, `markLost`.

SHA-256 do trecho: `52a71a2878c511ca6a1b90cef38170fe56915b528aaf39fa5183e9ed234671f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
