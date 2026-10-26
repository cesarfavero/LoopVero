# `SettingsService.assignAgentToSidebarSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/settings/settings-service.ts` · [README do módulo](../../../../../../modules/host/extensions/settings/settings-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728762-728768](../../../../../../../reference/runtime/host-main.cjs#L728762-L728768) | `method` | não | `agentId, sectionId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728762-728768](../../../../../../../reference/runtime/host-main.cjs#L728762-L728768) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:728762

Chamadas escritas diretamente neste corpo: `SidebarSections.assignAgents`, `this.announceChange`, `this.listSidebarSections`, `this.store.setSidebarSections`.

SHA-256 do trecho: `ea00471f20ab090c18fd7209b37d314f5c3c8aed6d7205401bda8a4a70b7e0de`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
