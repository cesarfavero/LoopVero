# `displayServerFields`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690353-690373](../../../../../../../reference/runtime/host-main.cjs#L690353-L690373) | `FunctionDeclaration` | não | `server, id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690353-690373](../../../../../../../reference/runtime/host-main.cjs#L690353-L690373) | 10 | 0 | 0 | 1 | 0 | 0 |

### host:690353

Chamadas escritas diretamente neste corpo: `accountSlotsFromAvailableServer`, `pluginAttributionFromAvailableServer`, `server.dataCenters.map`.

SHA-256 do trecho: `0059f808b5fbea1939dcc8a5c2cfe630ce75bfff8435382169ec3aae649efd45`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
