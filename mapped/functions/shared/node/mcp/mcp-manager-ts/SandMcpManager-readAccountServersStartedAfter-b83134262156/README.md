# `SandMcpManager.readAccountServersStartedAfter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689869-689880](../../../../../../../reference/runtime/host-main.cjs#L689869-L689880) | `method` | sim | `generation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689869-689880](../../../../../../../reference/runtime/host-main.cjs#L689869-L689880) | 3 | 1 | 1 | 2 | 0 | 0 |

### host:689869

Chamadas escritas diretamente neste corpo: `this.activeScopeAccountDisplayConfigView`, `this.invalidateAccountServersPromise`, `this.readAccountServers`.

SHA-256 do trecho: `8048c8dad908307585648c7a2007c60d5bd00d6e24c5b0e2c273b147c8cecea6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
