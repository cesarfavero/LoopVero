# `SandMcpManager.listServersFromCache`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689401-689404](../../../../../../../reference/runtime/host-main.cjs#L689401-L689404) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689401-689404](../../../../../../../reference/runtime/host-main.cjs#L689401-L689404) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:689401

Chamadas escritas diretamente neste corpo: `this.cachedListing`, `this.readVisibleDisplayServers`, `this.summarizeServers`.

SHA-256 do trecho: `f355f4abd90d25f61f2f102a17495d96500d1f0092ad707a2993f0a7e90d1abb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
