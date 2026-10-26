# `CloudAgentArtifactCache.syncMissing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agent-artifact-cache.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-artifact-cache-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538242-538254](../../../../../../../reference/runtime/host-main.cjs#L538242-L538254) | `method` | sim | `agentId, bcId, planned` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538242-538254](../../../../../../../reference/runtime/host-main.cjs#L538242-L538254) | 1 | 0 | 2 | 2 | 0 | 0 |

### host:538242

Chamadas escritas diretamente neste corpo: `syncCloudAgentArtifactsToBox`, `this.partitionByPresence`.

SHA-256 do trecho: `b039ecde5b2702dbe63eaf82ddec3cc4cf2aabf037d68984adaf5a039bbb8fab`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
