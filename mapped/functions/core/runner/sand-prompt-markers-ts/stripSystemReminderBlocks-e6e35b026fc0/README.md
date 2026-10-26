# `stripSystemReminderBlocks`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-prompt-markers.ts` · [README do módulo](../../../../../modules/core/runner/sand-prompt-markers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491199-491201](../../../../../../reference/runtime/host-main.cjs#L491199-L491201) | `FunctionDeclaration` | não | `text3` |
| [evaluation:526117-526119](../../../../../../reference/runtime/sand-eval-runner.cjs#L526117-L526119) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491199-491201](../../../../../../reference/runtime/host-main.cjs#L491199-L491201) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526117-526119](../../../../../../reference/runtime/sand-eval-runner.cjs#L526117-L526119) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491199

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `text3.replace`.

SHA-256 do trecho: `af4ed28e8a071d4535110377f9df9818c017a22a897c975298a56cad32b91f22`.

### evaluation:526117

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `text3.replace`.

SHA-256 do trecho: `af4ed28e8a071d4535110377f9df9818c017a22a897c975298a56cad32b91f22`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
