# `accountSlotsFromAvailableServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/cursor-backend/account-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/account-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690325-690340](../../../../../../../reference/runtime/host-main.cjs#L690325-L690340) | `FunctionDeclaration` | não | `server` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690325-690340](../../../../../../../reference/runtime/host-main.cjs#L690325-L690340) | 5 | 1 | 0 | 2 | 0 | 0 |

### host:690325

Chamadas escritas diretamente neste corpo: `normalizeMcpAccountLabel`, `slots.push`.

SHA-256 do trecho: `ddc5a4c114e6b8f3a1e5012e85f68b3d5c1b3859b628f087c8449605ae3fbd08`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
