# `AutomationRuntime.emitAutomationChange`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734154-734169](../../../../../../../reference/runtime/host-main.cjs#L734154-L734169) | `method` | não | `{     agentId,     action,     automationId,     automationName,     automation,     source   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734154-734169](../../../../../../../reference/runtime/host-main.cjs#L734154-L734169) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:734154

Chamadas escritas diretamente neste corpo: `this.emitAutomationLifecycle`, `this.tm.emitTimelineEvent`.

SHA-256 do trecho: `785fc843e94ad8cad80462fc026a655bae64f50716f2e5db4cc1aed8b830f554`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
