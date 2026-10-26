# `SandAutomationCloudSync.deleteAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505610-505642](../../../../../../../reference/runtime/host-main.cjs#L505610-L505642) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505610-505642](../../../../../../../reference/runtime/host-main.cjs#L505610-L505642) | 6 | 1 | 4 | 5 | 0 | 0 |

### host:505610

Chamadas escritas diretamente neste corpo: `initial.workflows.flatMap`, `new Error`, `readback.workflows.some`, `this.deleteRemote`, `this.deps.dropWebhookKeys`, `this.finishAgentDeletion`, `this.listRemote`, `this.pendingAgentDeletions.add`, `this.recordFailure`.

Alvos de atribuição ou incremento: `deleteFailed`.

SHA-256 do trecho: `8826cc7f9e976dc266437f37bc30bf511a1fb718cde846aec1250e63e8255142`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
