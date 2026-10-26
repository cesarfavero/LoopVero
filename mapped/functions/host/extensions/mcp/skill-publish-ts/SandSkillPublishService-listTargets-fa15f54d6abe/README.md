# `SandSkillPublishService.listTargets`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/skills/README.md).

**Módulo:** `host/extensions/mcp/skill-publish.ts` · [README do módulo](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:702131-702163](../../../../../../../reference/runtime/host-main.cjs#L702131-L702163) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702131-702163](../../../../../../../reference/runtime/host-main.cjs#L702131-L702163) | 1 | 0 | 2 | 2 | 0 | 1 |

### host:702131

Chamadas escritas diretamente neste corpo: `errorLogTag`, `errorMessage`, `new GetTeamsRequest`, `noPublishTargetsRefusal`, `publishableTeams`, `this.options.client.getTeams`, `this.options.log`, `this.options.readMemberPublishMarketplaces`, `this.options.reportEdgeFailed`.

Alvos de atribuição ou incremento: `response`.

SHA-256 do trecho: `67e42e31e1e677f5b71f6697b018c9e7f414ad2530912bd137f110d6fc010147`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
