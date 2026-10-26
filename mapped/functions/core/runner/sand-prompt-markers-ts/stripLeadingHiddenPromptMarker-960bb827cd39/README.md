# `stripLeadingHiddenPromptMarker`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-prompt-markers.ts` · [README do módulo](../../../../../modules/core/runner/sand-prompt-markers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491163-491166](../../../../../../reference/runtime/host-main.cjs#L491163-L491166) | `FunctionDeclaration` | não | `text3` |
| [evaluation:526069-526072](../../../../../../reference/runtime/sand-eval-runner.cjs#L526069-L526072) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491163-491166](../../../../../../reference/runtime/host-main.cjs#L491163-L491166) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526069-526072](../../../../../../reference/runtime/sand-eval-runner.cjs#L526069-L526072) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:491163

Chamadas escritas diretamente neste corpo: `leadingMarkerOf`, `text3.slice`.

SHA-256 do trecho: `4753f738ca67e50df5bf932b339591251ea11747484cf4d6b8fa699032d2fb87`.

### evaluation:526069

Chamadas escritas diretamente neste corpo: `leadingMarkerOf`, `text3.slice`.

SHA-256 do trecho: `4753f738ca67e50df5bf932b339591251ea11747484cf4d6b8fa699032d2fb87`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
