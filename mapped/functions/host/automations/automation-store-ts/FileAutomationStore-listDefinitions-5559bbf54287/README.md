# `FileAutomationStore.listDefinitions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720585-720594](../../../../../../reference/runtime/host-main.cjs#L720585-L720594) | `method` | não | `(nenhum)` |
| [evaluation:627936-627945](../../../../../../reference/runtime/sand-eval-runner.cjs#L627936-L627945) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720585-720594](../../../../../../reference/runtime/host-main.cjs#L720585-L720594) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:627936-627945](../../../../../../reference/runtime/sand-eval-runner.cjs#L627936-L627945) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:720585

Chamadas escritas diretamente neste corpo: `automations.push`, `automations.sort`, `this.listIds`, `this.readConfig`, `this.toRecord`.

SHA-256 do trecho: `35d6299d45fb5992b51bb8a37d334ccaf247ff61632be9c1031bcdd714236ee8`.

### evaluation:627936

Chamadas escritas diretamente neste corpo: `automations.push`, `automations.sort`, `this.listIds`, `this.readConfig`, `this.toRecord`.

SHA-256 do trecho: `35d6299d45fb5992b51bb8a37d334ccaf247ff61632be9c1031bcdd714236ee8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
