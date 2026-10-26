# `appCallableTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `host/extensions/mcp/mcp-app-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/mcp-app-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701439-701447](../../../../../../../reference/runtime/host-main.cjs#L701439-L701447) | `FunctionDeclaration` | não | `tool, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701439-701447](../../../../../../../reference/runtime/host-main.cjs#L701439-L701447) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:701439

Chamadas escritas diretamente neste corpo: `isDeclaredReadOnlyMcpTool`, `isVisibleToApps`.

SHA-256 do trecho: `223b5ddefe9670532e721e280b938b44ebabdd9adf8b7dc02d4106b4ab17b0f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
