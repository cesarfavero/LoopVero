# `originOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-snapshot-format.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742876-742885](../../../../../../reference/runtime/host-main.cjs#L742876-L742885) | `FunctionDeclaration` | não | `text3` |
| [evaluation:515538-515547](../../../../../../reference/runtime/sand-eval-runner.cjs#L515538-L515547) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742876-742885](../../../../../../reference/runtime/host-main.cjs#L742876-L742885) | 2 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:515538-515547](../../../../../../reference/runtime/sand-eval-runner.cjs#L515538-L515547) | 2 | 0 | 0 | 3 | 0 | 1 |

### host:742876

Chamadas escritas diretamente neste corpo: `PAGE_URL_LINE.exec`, `new URL`.

SHA-256 do trecho: `71d84f14abf8e33b1bbfa1ead6933410d22849b3e0a51c25fead6ae2d1848d86`.

### evaluation:515538

Chamadas escritas diretamente neste corpo: `PAGE_URL_LINE.exec`, `new URL`.

SHA-256 do trecho: `71d84f14abf8e33b1bbfa1ead6933410d22849b3e0a51c25fead6ae2d1848d86`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
