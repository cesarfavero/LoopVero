# `SandMcpManager.logoutAccount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689941-689943](../../../../../../../reference/runtime/host-main.cjs#L689941-L689943) | `method` | sim | `rawServerId, rawAccountKey` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689941-689943](../../../../../../../reference/runtime/host-main.cjs#L689941-L689943) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:689941

Chamadas escritas diretamente neste corpo: `this.accountSlots.logoutAccount`.

SHA-256 do trecho: `fedb96b4000df42f9d15e4553d8d258b07a46700334dac37c9d15e1b4bd6ab47`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
