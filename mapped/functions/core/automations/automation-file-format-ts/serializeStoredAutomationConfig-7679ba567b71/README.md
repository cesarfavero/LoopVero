# `serializeStoredAutomationConfig`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-file-format.ts` · [README do módulo](../../../../../modules/core/automations/automation-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716532-716558](../../../../../../reference/runtime/host-main.cjs#L716532-L716558) | `FunctionDeclaration` | não | `config2` |
| [evaluation:627246-627272](../../../../../../reference/runtime/sand-eval-runner.cjs#L627246-L627272) | `FunctionDeclaration` | não | `config2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716532-716558](../../../../../../reference/runtime/host-main.cjs#L716532-L716558) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627246-627272](../../../../../../reference/runtime/sand-eval-runner.cjs#L627246-L627272) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:716532

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `serializeStoredTrigger`, `triggerSchedule`.

SHA-256 do trecho: `9d3f4768d4c49d1e88d96519f0940d8e61005f6c538a5d65c7c01546ee596ff9`.

### evaluation:627246

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `serializeStoredTrigger`, `triggerSchedule`.

SHA-256 do trecho: `9d3f4768d4c49d1e88d96519f0940d8e61005f6c538a5d65c7c01546ee596ff9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
