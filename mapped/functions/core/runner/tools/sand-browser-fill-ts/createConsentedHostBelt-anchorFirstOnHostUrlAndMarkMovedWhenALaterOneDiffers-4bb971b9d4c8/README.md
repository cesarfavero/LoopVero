# `createConsentedHostBelt/anchorFirstOnHostUrlAndMarkMovedWhenALaterOneDiffers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:727362-727366](../../../../../../../reference/runtime/host-main.cjs#L727362-L727366) | `ArrowFunctionExpression` | não | `url2` |
| [evaluation:561868-561872](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561868-L561872) | `ArrowFunctionExpression` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727362-727366](../../../../../../../reference/runtime/host-main.cjs#L727362-L727366) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561868-561872](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561868-L561872) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:727362

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `anchorUrl`, `moved`.

SHA-256 do trecho: `638d340e07c527c3a5a4caf6fb41f8c5222e04eea1266ac820a06b63d64230c3`.

### evaluation:561868

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

Alvos de atribuição ou incremento: `anchorUrl`, `moved`.

SHA-256 do trecho: `638d340e07c527c3a5a4caf6fb41f8c5222e04eea1266ac820a06b63d64230c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
