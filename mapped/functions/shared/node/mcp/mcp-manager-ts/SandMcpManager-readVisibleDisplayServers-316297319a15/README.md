# `SandMcpManager.readVisibleDisplayServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:689457-689489](../../../../../../../reference/runtime/host-main.cjs#L689457-L689489) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:689457-689489](../../../../../../../reference/runtime/host-main.cjs#L689457-L689489) | 4 | 0 | 3 | 1 | 0 | 0 |

### host:689457

Chamadas escritas diretamente neste corpo: `.map`, `Object.entries`, `this.accountDisplayConfigProvider`, `this.accountSlots.noteAccountDisplayConfig`, `this.definitionSource.getUserServerConfigs`, `this.instructionsAndToggles.migrateCustomInstructions`, `this.lastAccountDisplayConfigView`, `this.readAccountServers`, `this.visibleServersOf`.

Alvos de atribuição ou incremento: `accountDegraded`, `displayConfig`.

SHA-256 do trecho: `20c6b38442f8246c75c3ea3877e7b968ed4cb0c330471baec9ae5977cc1335a6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
