# `createMcpToolsDiscovery/_readResource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691168-691192](../../../../../../../reference/runtime/host-main.cjs#L691168-L691192) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691168-691192](../../../../../../../reference/runtime/host-main.cjs#L691168-L691192) | 4 | 0 | 5 | 4 | 0 | 1 |

### host:691168

Chamadas escritas diretamente neste corpo: `_ensureBoxServersPushed`, `_isBoxStdioProvider`, `_isHttpProvider`, `boxMcpExec.readResource`, `core2.backendMcpExec.readResource`, `errorMessage`.

SHA-256 do trecho: `252495b4fb797d438844132e968a60309729bc431bfd9a8ccb38b0ae3ff2c4a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
