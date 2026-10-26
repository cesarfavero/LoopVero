# `linkDestination`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/trays/error-details-tray.ts` · [README do módulo](../../../../../modules/shared/trays/error-details-tray-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736552-736562](../../../../../../reference/runtime/host-main.cjs#L736552-L736562) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736552-736562](../../../../../../reference/runtime/host-main.cjs#L736552-L736562) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:736552

Chamadas escritas diretamente neste corpo: `.join`, `NON_DESTINATION_URL_PARAMS.has`, `URL.canParse`, `encodeURIComponent`, `kept.push`, `kept.toSorted`, `key.startsWith`, `new URL`.

SHA-256 do trecho: `1da24e786d5f88db3fff8832dbc43e3cf1d408d2285844e27903de2bb54da284`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
