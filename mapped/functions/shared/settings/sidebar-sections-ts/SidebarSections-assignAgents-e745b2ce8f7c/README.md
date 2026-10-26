# `_SidebarSections.assignAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/settings/sidebar-sections.ts` · [README do módulo](../../../../../modules/shared/settings/sidebar-sections-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687471-687485](../../../../../../reference/runtime/host-main.cjs#L687471-L687485) | `method` | não | `sections, agentIds, sectionId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687471-687485](../../../../../../reference/runtime/host-main.cjs#L687471-L687485) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:687471

Chamadas escritas diretamente neste corpo: `_SidebarSections.normalize`, `new Set`, `normalized.map`, `normalized.some`, `stripped.map`.

SHA-256 do trecho: `a88aa285655e6cf799f12d8591903cfaad68c8e60b5e842fadcec8e77ae08dbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
