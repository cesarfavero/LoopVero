# `threadLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/search-email-threads-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/search-email-threads-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765163-765182](../../../../../../../reference/runtime/host-main.cjs#L765163-L765182) | `FunctionDeclaration` | não | `thread, index` |
| [evaluation:558531-558550](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558531-L558550) | `FunctionDeclaration` | não | `thread, index` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765163-765182](../../../../../../../reference/runtime/host-main.cjs#L765163-L765182) | 5 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:558531-558550](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558531-L558550) | 5 | 1 | 0 | 1 | 0 | 0 |

### host:765163

Chamadas escritas diretamente neste corpo: `formatEmailAddress`, `formatEmailAddresses`, `formatEmailDirection`, `formatEmailTimestamp`, `lines2.push`, `softenInlineImageMarkers`, `thread.subject.trim`.

SHA-256 do trecho: `ffd518af551c2d6315f238cd94ca9fe50b1fc23fc0cff058799c9cab5c574169`.

### evaluation:558531

Chamadas escritas diretamente neste corpo: `formatEmailAddress`, `formatEmailAddresses`, `formatEmailDirection`, `formatEmailTimestamp`, `lines2.push`, `softenInlineImageMarkers`, `thread.subject.trim`.

SHA-256 do trecho: `ffd518af551c2d6315f238cd94ca9fe50b1fc23fc0cff058799c9cab5c574169`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
