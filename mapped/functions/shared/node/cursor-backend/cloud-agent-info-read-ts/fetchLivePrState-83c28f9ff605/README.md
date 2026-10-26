# `fetchLivePrState`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-info-read.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-info-read-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:508493-508523](../../../../../../../reference/runtime/host-main.cjs#L508493-L508523) | `FunctionDeclaration` | sim | `client, prUrl, storedState` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508493-508523](../../../../../../../reference/runtime/host-main.cjs#L508493-L508523) | 2 | 0 | 1 | 4 | 0 | 1 |

### host:508493

Chamadas escritas diretamente neste corpo: `classifyReadFailure`, `client.getPullRequestMergeStatus`, `mapMergeStatusToPrState`, `new GetPullRequestMergeStatusRequest`, `parseMergeableState`.

Alvos de atribuição ou incremento: `status`.

SHA-256 do trecho: `eb34412c82dac4df1e81315ff19e6c9f01806462673ca9f3ac6ba8c5bfb34f5f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
