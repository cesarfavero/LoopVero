# `SandMcpDefinitionSource.getDefinitions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-definition-source.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-definition-source-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686764-686780](../../../../../../../reference/runtime/host-main.cjs#L686764-L686780) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686764-686780](../../../../../../../reference/runtime/host-main.cjs#L686764-L686780) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:686764

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `Object.entries`, `getBuiltinMcpServers`, `this.getUserServerConfigs`.

SHA-256 do trecho: `d7fa7d7d4f8c53dafebcc645a74b5f0a8f92ebc7382fdf8ce2222658a3ac8e35`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
