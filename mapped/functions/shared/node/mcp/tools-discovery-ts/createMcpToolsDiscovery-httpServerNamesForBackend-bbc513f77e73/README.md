# `createMcpToolsDiscovery/_httpServerNamesForBackend`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691424-691428](../../../../../../../reference/runtime/host-main.cjs#L691424-L691428) | `FunctionDeclaration` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691424-691428](../../../../../../../reference/runtime/host-main.cjs#L691424-L691428) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:691424

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `Object.entries`, `_grokNativeIdentifiers`, `core2.definitionSource.getUserServerConfigs`, `new Set`.

SHA-256 do trecho: `862b40a01ab75d1f4b949a65e32dfdead0915b2a5a0f6fced4784a38e5f317cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
