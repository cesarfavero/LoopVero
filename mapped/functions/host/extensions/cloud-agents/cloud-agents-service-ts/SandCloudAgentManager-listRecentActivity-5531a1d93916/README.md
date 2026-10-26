# `SandCloudAgentManager.listRecentActivity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538556-538558](../../../../../../../reference/runtime/host-main.cjs#L538556-L538558) | `method` | sim | `limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538556-538558](../../../../../../../reference/runtime/host-main.cjs#L538556-L538558) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:538556

Chamadas escritas diretamente neste corpo: `this.backend.listRecentActivity`.

SHA-256 do trecho: `260f9aca43a7c2d9c9090bfb789510ef5aaf43e1d2338205e1fba8bc7191bf8a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
