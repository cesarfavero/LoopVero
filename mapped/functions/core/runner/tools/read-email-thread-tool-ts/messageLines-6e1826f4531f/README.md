# `messageLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/read-email-thread-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/read-email-thread-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765025-765067](../../../../../../../reference/runtime/host-main.cjs#L765025-L765067) | `FunctionDeclaration` | não | `message, index` |
| [evaluation:558393-558435](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558393-L558435) | `FunctionDeclaration` | não | `message, index` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765025-765067](../../../../../../../reference/runtime/host-main.cjs#L765025-L765067) | 14 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558393-558435](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558393-L558435) | 14 | 0 | 0 | 1 | 0 | 0 |

### host:765025

Chamadas escritas diretamente neste corpo: `.trimEnd`, `attachmentLines`, `formatEmailAddress`, `formatEmailAddresses`, `formatEmailDirection`, `formatEmailTimestamp`, `lines2.push`, `message.deliveryState.toLowerCase`, `message.subject.trim`, `meta3.join`, `meta3.push`, `verifyInlineImageMarkers`.

SHA-256 do trecho: `cb4ad26e3f343b8c8cce7e215373f35b1fa906125420914f164ae78fb061d072`.

### evaluation:558393

Chamadas escritas diretamente neste corpo: `.trimEnd`, `attachmentLines`, `formatEmailAddress`, `formatEmailAddresses`, `formatEmailDirection`, `formatEmailTimestamp`, `lines2.push`, `message.deliveryState.toLowerCase`, `message.subject.trim`, `meta3.join`, `meta3.push`, `verifyInlineImageMarkers`.

SHA-256 do trecho: `cb4ad26e3f343b8c8cce7e215373f35b1fa906125420914f164ae78fb061d072`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
