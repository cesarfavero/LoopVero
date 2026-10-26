# `FileAutomationStore.finishRunDefinition`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720729-720748](../../../../../../reference/runtime/host-main.cjs#L720729-L720748) | `method` | não | `{     id,     runId,     status,     at: at3 = Date.now(),     detail,     errorKind,     requestId: requestId2   }` |
| [evaluation:628080-628099](../../../../../../reference/runtime/sand-eval-runner.cjs#L628080-L628099) | `method` | não | `{     id,     runId,     status,     at: at3 = Date.now(),     detail,     errorKind,     requestId   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720729-720748](../../../../../../reference/runtime/host-main.cjs#L720729-L720748) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:628080-628099](../../../../../../reference/runtime/sand-eval-runner.cjs#L628080-L628099) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:720729

Chamadas escritas diretamente neste corpo: `this.finishRunWith`.

SHA-256 do trecho: `771604583ea6fb78325a6f23e34b9b3a3e13defaded388cc0aad534512008965`.

### evaluation:628080

Chamadas escritas diretamente neste corpo: `this.finishRunWith`.

SHA-256 do trecho: `9d8ffc5640c0175ea315c61b6f96d89ffd45f348f8c0b8dae23cb5a463b11a5f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
