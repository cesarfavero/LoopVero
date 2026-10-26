# `parseCronWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716290-716296](../../../../../../reference/runtime/host-main.cjs#L716290-L716296) | `FunctionDeclaration` | não | `window2` |
| [evaluation:527973-527979](../../../../../../reference/runtime/sand-eval-runner.cjs#L527973-L527979) | `FunctionDeclaration` | não | `window2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716290-716296](../../../../../../reference/runtime/host-main.cjs#L716290-L716296) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:527973-527979](../../../../../../reference/runtime/sand-eval-runner.cjs#L527973-L527979) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:716290

Chamadas escritas diretamente neste corpo: `windowMinutes`.

SHA-256 do trecho: `379743e52acc3896442abcb1e8736e91449100bdb064588e8f8862c6df4c1725`.

### evaluation:527973

Chamadas escritas diretamente neste corpo: `windowMinutes`.

SHA-256 do trecho: `379743e52acc3896442abcb1e8736e91449100bdb064588e8f8862c6df4c1725`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
