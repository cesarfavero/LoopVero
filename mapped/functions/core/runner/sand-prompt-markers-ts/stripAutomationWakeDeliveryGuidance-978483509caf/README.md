# `stripAutomationWakeDeliveryGuidance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-prompt-markers.ts` · [README do módulo](../../../../../modules/core/runner/sand-prompt-markers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491202-491206](../../../../../../reference/runtime/host-main.cjs#L491202-L491206) | `FunctionDeclaration` | não | `text3` |
| [evaluation:526120-526124](../../../../../../reference/runtime/sand-eval-runner.cjs#L526120-L526124) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491202-491206](../../../../../../reference/runtime/host-main.cjs#L491202-L491206) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:526120-526124](../../../../../../reference/runtime/sand-eval-runner.cjs#L526120-L526124) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:491202

Chamadas escritas diretamente neste corpo: `.trimEnd`, `lastLineStartingWith`, `text3.slice`, `text3.startsWith`.

SHA-256 do trecho: `ee5c06159a20b02d338c505f7465dc98e21a3c0c2d3badbe11c75181a3506bc1`.

### evaluation:526120

Chamadas escritas diretamente neste corpo: `.trimEnd`, `lastLineStartingWith`, `text3.slice`, `text3.startsWith`.

SHA-256 do trecho: `ee5c06159a20b02d338c505f7465dc98e21a3c0c2d3badbe11c75181a3506bc1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
