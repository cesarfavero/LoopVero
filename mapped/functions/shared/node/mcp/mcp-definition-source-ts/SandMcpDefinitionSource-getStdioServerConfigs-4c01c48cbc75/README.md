# `SandMcpDefinitionSource.getStdioServerConfigs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-definition-source.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-definition-source-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686691-686701](../../../../../../../reference/runtime/host-main.cjs#L686691-L686701) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686691-686701](../../../../../../../reference/runtime/host-main.cjs#L686691-L686701) | 1 | 1 | 2 | 1 | 0 | 0 |

### host:686691

Chamadas escritas diretamente neste corpo: `Object.entries`, `this.getUserServerConfigs`, `this.stdioConfigForBox`.

Alvos de atribuição ou incremento: `stdioServers[computed]`.

SHA-256 do trecho: `5081fea6cd87784b1fa8f5eaa6989d247853f98fcca7703cf8da44f1c4434192`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
