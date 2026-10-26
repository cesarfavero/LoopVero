# `agentHasDurableFootprint`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/context-compaction/README.md).

**Módulo:** `host/extensions/session/session-summaries.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722721-722723](../../../../../../../reference/runtime/host-main.cjs#L722721-L722723) | `FunctionDeclaration` | sim | `agentDir, agentHasMemory` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722721-722723](../../../../../../../reference/runtime/host-main.cjs#L722721-L722723) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:722721

Chamadas escritas diretamente neste corpo: `agentHasAutomations`, `agentHasMemory`, `agentHasQuarantinedStoreDb`, `agentHasSkills`.

SHA-256 do trecho: `aa79d5ef798774d992791eeabdedabe30c21f4f7535b3492677e180feacea34e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
