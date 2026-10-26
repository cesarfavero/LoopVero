# `SandMcpManager.reloadServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689962-689968](../../../../../../../reference/runtime/host-main.cjs#L689962-L689968) | `method` | sim | `removedServerId, reconcileEmptyBox` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689962-689968](../../../../../../../reference/runtime/host-main.cjs#L689962-L689968) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:689962

Chamadas escritas diretamente neste corpo: `this.accountSlots.dropServerFromDisplay`, `this.listServers`, `this.reload`.

SHA-256 do trecho: `bbd9a1ce5a4bb93398e5f7b9ad6f6670a2faca7d8fef12c6a0b97a9256e70ada`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
