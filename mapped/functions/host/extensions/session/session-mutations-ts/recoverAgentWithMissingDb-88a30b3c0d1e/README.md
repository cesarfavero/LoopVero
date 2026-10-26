# `recoverAgentWithMissingDb`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/session-mutations.ts` · [README do módulo](../../../../../../modules/host/extensions/session/session-mutations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722762-722786](../../../../../../../reference/runtime/host-main.cjs#L722762-L722786) | `FunctionDeclaration` | sim | `host, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722762-722786](../../../../../../../reference/runtime/host-main.cjs#L722762-L722786) | 4 | 0 | 3 | 4 | 0 | 0 |

### host:722762

Chamadas escritas diretamente neste corpo: `agentHasDurableFootprint`, `buildSummary`, `getSandProfilePath`, `hasLiveSandAgentDbHandle`, `host.isAgentBeingDeleted`, `host.reseedMinimalStoreDbIfMissing`, `statIfExists`.

Alvos de atribuição ou incremento: `dbStats`.

SHA-256 do trecho: `4ca8aa2b335e59c89c0c075e63017cfe4f14905a09d16057d12384c630289df9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
