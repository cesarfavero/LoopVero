# `SandMcpManager.listServersForDisplay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689441-689456](../../../../../../../reference/runtime/host-main.cjs#L689441-L689456) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689441-689456](../../../../../../../reference/runtime/host-main.cjs#L689441-L689456) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:689441

Chamadas escritas diretamente neste corpo: `this.cachedListing`, `this.displayListing.beginRead`, `this.displayListing.endRead`, `this.kickAccountRecovery`, `this.readVisibleDisplayServers`, `this.settleBackendForDisplay`, `this.settleBoxForDisplay`, `this.summarizeServers`.

Alvos de atribuição ou incremento: `visible`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `f3215a6324671f8bc297212ec064528b7fb88228e6be30b2e6e595f7e4f98eaa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
