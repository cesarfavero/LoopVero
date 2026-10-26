# `SandCloudAgentManager.setArchived`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538586-538588](../../../../../../../reference/runtime/host-main.cjs#L538586-L538588) | `method` | sim | `bcId, archived` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538586-538588](../../../../../../../reference/runtime/host-main.cjs#L538586-L538588) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:538586

Chamadas escritas diretamente neste corpo: `this.backend.setArchived`.

SHA-256 do trecho: `3dfc7370f98ec833da3a097f34fbdbbb07c8784c9744ea5a4f3422651a85ffdc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
