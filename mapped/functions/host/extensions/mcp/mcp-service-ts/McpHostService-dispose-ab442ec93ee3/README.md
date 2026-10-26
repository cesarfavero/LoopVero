# `McpHostService.dispose`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/mcp-service.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/mcp-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701601-701608](../../../../../../../reference/runtime/host-main.cjs#L701601-L701608) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701601-701608](../../../../../../../reference/runtime/host-main.cjs#L701601-L701608) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:701601

Chamadas escritas diretamente neste corpo: `this.authCompletionListeners.clear`, `this.hostMcp.dispose`, `this.serversUpdatedListeners.clear`, `this.statusFollowUps.clear`.

Alvos de atribuição ou incremento: `this.disposed`.

SHA-256 do trecho: `9317876377c6184006eb17eadfd1f7bf7fde135e73654844b717fe981a0702b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
