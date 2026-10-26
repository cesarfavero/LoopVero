# `SandAutomationCloudSync.reconcileNow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505594-505609](../../../../../../../reference/runtime/host-main.cjs#L505594-L505609) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505594-505609](../../../../../../../reference/runtime/host-main.cjs#L505594-L505609) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:505594

Chamadas escritas diretamente neste corpo: `.catch`, `.finally`, `this.retryPendingAgentDeletions`.

Alvos de atribuição ou incremento: `this.inFlight`, `this.rerun`.

SHA-256 do trecho: `76a48b7bc86efec07d947c0288134ca7d8bef8c05da0683effe5a170d77c6730`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
