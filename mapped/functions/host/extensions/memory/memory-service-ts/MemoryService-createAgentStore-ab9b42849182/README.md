# `MemoryService.createAgentStore`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `host/extensions/memory/memory-service.ts` · [README do módulo](../../../../../../modules/host/extensions/memory/memory-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702992-702994](../../../../../../../reference/runtime/host-main.cjs#L702992-L702994) | `method` | não | `agentDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702992-702994](../../../../../../../reference/runtime/host-main.cjs#L702992-L702994) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702992

Chamadas escritas diretamente neste corpo: `getAgentMemoryDir`, `new FileMemoryStore`.

SHA-256 do trecho: `b1d454e6a1a13209d941d9a7de768fe727a5185b0a1f571bec0f3d75eec5cbde`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
