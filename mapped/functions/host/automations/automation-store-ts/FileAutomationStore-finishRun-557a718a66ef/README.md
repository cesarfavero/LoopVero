# `FileAutomationStore.finishRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720719-720728](../../../../../../reference/runtime/host-main.cjs#L720719-L720728) | `method` | não | `id, runId, status, at3 = Date.now(), detail` |
| [evaluation:628070-628079](../../../../../../reference/runtime/sand-eval-runner.cjs#L628070-L628079) | `method` | não | `id, runId, status, at3 = Date.now(), detail` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720719-720728](../../../../../../reference/runtime/host-main.cjs#L720719-L720728) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:628070-628079](../../../../../../reference/runtime/sand-eval-runner.cjs#L628070-L628079) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:720719

Chamadas escritas diretamente neste corpo: `this.finishRunWith`.

SHA-256 do trecho: `49070daa21ccaec94aa94fa7cc16a3654ced8e9b0c3db2a408e282f392cf9e50`.

### evaluation:628070

Chamadas escritas diretamente neste corpo: `this.finishRunWith`.

SHA-256 do trecho: `49070daa21ccaec94aa94fa7cc16a3654ced8e9b0c3db2a408e282f392cf9e50`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
