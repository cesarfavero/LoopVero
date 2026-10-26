# `SandCloudAgentManager.listArtifacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538592-538594](../../../../../../../reference/runtime/host-main.cjs#L538592-L538594) | `method` | sim | `bcId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538592-538594](../../../../../../../reference/runtime/host-main.cjs#L538592-L538594) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:538592

Chamadas escritas diretamente neste corpo: `this.backend.listArtifacts`.

SHA-256 do trecho: `1e48baae1190078a5200cf60279d8a64404321cc13b7767eb8e19164b8d25199`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
