# `backendSummaryStatus`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-listing-summaries.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688812-688824](../../../../../../../reference/runtime/host-main.cjs#L688812-L688824) | `FunctionDeclaration` | não | `server, backend, isListed, slot, authState` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688812-688824](../../../../../../../reference/runtime/host-main.cjs#L688812-L688824) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:688812

Chamadas escritas diretamente neste corpo: `isBackendRefusalDetail`, `slotWithAuthState`, `statusForBackendSlot`, `statusFromBackendListStatus`, `unlistedStatusForBackendSlot`.

SHA-256 do trecho: `81964b59fbc32e1d95eb51faa60abd4a9a8544d92a56962c95287e62e130ed6e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
