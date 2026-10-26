# `_SidebarSections.carryFolds`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/settings/sidebar-sections.ts` · [README do módulo](../../../../../modules/shared/settings/sidebar-sections-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687486-687500](../../../../../../reference/runtime/host-main.cjs#L687486-L687500) | `method` | não | `{     sections,     stored = []   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687486-687500](../../../../../../reference/runtime/host-main.cjs#L687486-L687500) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:687486

Chamadas escritas diretamente neste corpo: `.map`, `_SidebarSections.normalize`, `foldBySectionId.set`, `new Map`, `section.id.trim`.

SHA-256 do trecho: `5ba5315118f6a467df485591b60d3adb8c73d84dcf2c71e5aa0742b43eb3d529`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
