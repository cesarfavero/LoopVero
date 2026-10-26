# `SandCloudAgentManager.getDashboardClient`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/cloud-agents/cloud-agents-service.ts` · [README do módulo](../../../../../../modules/host/extensions/cloud-agents/cloud-agents-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:538393-538407](../../../../../../../reference/runtime/host-main.cjs#L538393-L538407) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538393-538407](../../../../../../../reference/runtime/host-main.cjs#L538393-L538407) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:538393

Chamadas escritas diretamente neste corpo: `createSandCursorBackendClient`.

Alvos de atribuição ou incremento: `this.dashboardClient`.

SHA-256 do trecho: `139558d14cf9d605d1e1bce9df8e2010a8390094f048924e100dccf45443d0df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
