# `refineLinkItems`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741471-741513](../../../../../../../reference/runtime/host-main.cjs#L741471-L741513) | `FunctionDeclaration` | não | `items, ctx` |
| [evaluation:482418-482460](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482418-L482460) | `FunctionDeclaration` | não | `items, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741471-741513](../../../../../../../reference/runtime/host-main.cjs#L741471-L741513) | 6 | 1 | 0 | 0 | 0 | 0 |
| [evaluation:482418-482460](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482418-L482460) | 6 | 1 | 0 | 0 | 0 | 0 |

### host:741471

Chamadas escritas diretamente neste corpo: `ISO_4217_CURRENCIES.has`, `Number.isFinite`, `ctx.addIssue`, `items.entries`, `new Set`, `parseLinkItemUrl`, `seen.add`, `seen.has`.

SHA-256 do trecho: `43d184f50eceb085ee38acfe8056a7ce2daeeb323bc196c00fe872e6867c9cc7`.

### evaluation:482418

Chamadas escritas diretamente neste corpo: `ISO_4217_CURRENCIES.has`, `Number.isFinite`, `ctx.addIssue`, `items.entries`, `new Set`, `parseLinkItemUrl`, `seen.add`, `seen.has`.

SHA-256 do trecho: `eb07646ad3f61c510ecf5c4ceef92fb86443b8b1dae777c0eb6d51aec7b50cc6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
