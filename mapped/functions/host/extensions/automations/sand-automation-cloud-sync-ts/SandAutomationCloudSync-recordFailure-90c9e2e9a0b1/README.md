# `SandAutomationCloudSync.recordFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/automations/sand-automation-cloud-sync.ts` · [README do módulo](../../../../../../modules/host/extensions/automations/sand-automation-cloud-sync-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:505668-505684](../../../../../../../reference/runtime/host-main.cjs#L505668-L505684) | `method` | não | `failure3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505668-505684](../../../../../../../reference/runtime/host-main.cjs#L505668-L505684) | 2 | 0 | 0 | 1 | 0 | 1 |

### host:505668

Chamadas escritas diretamente neste corpo: `errorIdentity`, `this.deps.hasCredential`, `this.deps.onFailure`, `this.deps.reportDiagnostic`, `this.failedAgentIds.add`, `this.logCallbackFailure`.

SHA-256 do trecho: `88d13d5d8b1e6bb21798136ea35e15d3966c84b97366b92720a902b1697e970a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
