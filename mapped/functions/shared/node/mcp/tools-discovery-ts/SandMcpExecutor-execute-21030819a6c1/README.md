# `SandMcpExecutor.execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/tools-discovery.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/tools-discovery-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:691547-691557](../../../../../../../reference/runtime/host-main.cjs#L691547-L691557) | `method` | sim | `ctx, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:691547-691557](../../../../../../../reference/runtime/host-main.cjs#L691547-L691557) | 2 | 0 | 3 | 2 | 0 | 0 |

### host:691547

Chamadas escritas diretamente neste corpo: `augmentMcpResultWithSavedImages`, `this.discovery.executeTool`, `this.spillLargeText`.

SHA-256 do trecho: `78a4e41f600b67c751d92163f0cc796b7ccd94eebf57b0005c23cf5f55a692af`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
