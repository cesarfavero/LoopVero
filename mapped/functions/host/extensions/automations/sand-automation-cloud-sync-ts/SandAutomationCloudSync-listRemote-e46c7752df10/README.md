# `SandAutomationCloudSync.listRemote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505649-505658](../../../../../../../reference/runtime/host-main.cjs#L505649-L505658) | `method` | sim | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505649-505658](../../../../../../../reference/runtime/host-main.cjs#L505649-L505658) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:505649

Chamadas escritas diretamente neste corpo: `new ListSandAutomationsRequest`, `this.deps.client.listSandAutomations`, `this.recordFailure`.

SHA-256 do trecho: `3d33cbd5e56a86aa56af86c7f62d26caad5e3e10a5593eb89a0a98b1de779620`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
