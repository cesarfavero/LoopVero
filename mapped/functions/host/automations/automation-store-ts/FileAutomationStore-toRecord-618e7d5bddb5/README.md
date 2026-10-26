# `FileAutomationStore.toRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720515-720527](../../../../../../reference/runtime/host-main.cjs#L720515-L720527) | `method` | não | `{     id,     config: config2,     deriveNextRunAt   }` |
| [evaluation:627866-627878](../../../../../../reference/runtime/sand-eval-runner.cjs#L627866-L627878) | `method` | não | `{     id,     config: config2,     deriveNextRunAt   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720515-720527](../../../../../../reference/runtime/host-main.cjs#L720515-L720527) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627866-627878](../../../../../../reference/runtime/sand-eval-runner.cjs#L627866-L627878) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:720515

Chamadas escritas diretamente neste corpo: `automationRecordFromConfig`, `earliestAutomationNextRunAt`, `this.configPath`, `this.readRuns`, `this.resolveUserTimeZone`.

SHA-256 do trecho: `97862d8cd9ebf298ccb5bba001e74847f9da7e8947efd413ac604203c9df80ac`.

### evaluation:627866

Chamadas escritas diretamente neste corpo: `automationRecordFromConfig`, `earliestAutomationNextRunAt`, `this.configPath`, `this.readRuns`, `this.resolveUserTimeZone`.

SHA-256 do trecho: `97862d8cd9ebf298ccb5bba001e74847f9da7e8947efd413ac604203c9df80ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
