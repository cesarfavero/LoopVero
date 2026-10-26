# `SandMcpManager.reloadAfterPluginWrite`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689969-689988](../../../../../../../reference/runtime/host-main.cjs#L689969-L689988) | `method` | sim | `write4, reload = "listed"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689969-689988](../../../../../../../reference/runtime/host-main.cjs#L689969-L689988) | 1 | 0 | 3 | 2 | 1 | 1 |

### host:689969

Chamadas escritas diretamente neste corpo: `this.accountSlots.noteListedState`, `this.displayListing.beginRead`, `this.displayListing.endRead`, `this.listAfterPluginWrite`, `this.noteSettledAfterPluginWrite`, `this.reload`, `this.reloadServers`.

Alvos de atribuição ou incremento: `listed`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `0cd650764742933b2d2feb7cccabac49db5b7244de12906adae3dc7da9412d1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
