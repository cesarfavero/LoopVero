# `SandAutomationCloudSync.deleteRemote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505659-505667](../../../../../../../reference/runtime/host-main.cjs#L505659-L505667) | `method` | sim | `agentId, automationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505659-505667](../../../../../../../reference/runtime/host-main.cjs#L505659-L505667) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:505659

Chamadas escritas diretamente neste corpo: `new DeleteAutomationRequest`, `this.deps.client.deleteSandAutomation`, `this.recordFailure`.

SHA-256 do trecho: `d54afa7e68a349a77c5bf5205c3349b6b2c3c1b2a92735c40e8a7cc7c7e72d69`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
