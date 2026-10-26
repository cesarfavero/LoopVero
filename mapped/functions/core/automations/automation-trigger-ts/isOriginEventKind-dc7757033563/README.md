# `isOriginEventKind`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716006-716008](../../../../../../reference/runtime/host-main.cjs#L716006-L716008) | `FunctionDeclaration` | não | `value` |
| [evaluation:527689-527691](../../../../../../reference/runtime/sand-eval-runner.cjs#L527689-L527691) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716006-716008](../../../../../../reference/runtime/host-main.cjs#L716006-L716008) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:527689-527691](../../../../../../reference/runtime/sand-eval-runner.cjs#L527689-L527691) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716006

Chamadas escritas diretamente neste corpo: `ORIGIN_EVENT_KINDS.some`.

SHA-256 do trecho: `61bc1cc5320701c821c7f390754559d3ab7684211c61fc84dde8f641ef911354`.

### evaluation:527689

Chamadas escritas diretamente neste corpo: `ORIGIN_EVENT_KINDS.some`.

SHA-256 do trecho: `61bc1cc5320701c821c7f390754559d3ab7684211c61fc84dde8f641ef911354`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
