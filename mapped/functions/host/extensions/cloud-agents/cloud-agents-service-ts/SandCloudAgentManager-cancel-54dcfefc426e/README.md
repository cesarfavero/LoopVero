# `SandCloudAgentManager.cancel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538574-538576](../../../../../../../reference/runtime/host-main.cjs#L538574-L538576) | `method` | sim | `bcId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538574-538576](../../../../../../../reference/runtime/host-main.cjs#L538574-L538576) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:538574

Chamadas escritas diretamente neste corpo: `this.backend.cancel`.

SHA-256 do trecho: `18425b67d082a7c19e674898cb66ef9c5a45490a9e9d581924eb65293b10408b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
