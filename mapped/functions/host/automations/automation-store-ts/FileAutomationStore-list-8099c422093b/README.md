# `FileAutomationStore.list`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720570-720584](../../../../../../reference/runtime/host-main.cjs#L720570-L720584) | `method` | não | `(nenhum)` |
| [evaluation:627921-627935](../../../../../../reference/runtime/sand-eval-runner.cjs#L627921-L627935) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720570-720584](../../../../../../reference/runtime/host-main.cjs#L720570-L720584) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:627921-627935](../../../../../../reference/runtime/sand-eval-runner.cjs#L627921-L627935) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:720570

Chamadas escritas diretamente neste corpo: `automations.push`, `automations.sort`, `this.listIds`, `this.readConfig`, `this.toRecord`.

SHA-256 do trecho: `91137b247295c1a8a04c096c046b4e9a7a4cb902d574679113868903cbc70fa4`.

### evaluation:627921

Chamadas escritas diretamente neste corpo: `automations.push`, `automations.sort`, `this.listIds`, `this.readConfig`, `this.toRecord`.

SHA-256 do trecho: `91137b247295c1a8a04c096c046b4e9a7a4cb902d574679113868903cbc70fa4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
