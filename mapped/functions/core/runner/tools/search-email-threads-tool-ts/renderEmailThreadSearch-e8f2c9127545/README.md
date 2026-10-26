# `renderEmailThreadSearch`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/search-email-threads-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/search-email-threads-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765183-765195](../../../../../../../reference/runtime/host-main.cjs#L765183-L765195) | `FunctionDeclaration` | não | `query2, threads` |
| [evaluation:558551-558563](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558551-L558563) | `FunctionDeclaration` | não | `query2, threads` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765183-765195](../../../../../../../reference/runtime/host-main.cjs#L765183-L765195) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:558551-558563](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558551-L558563) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:765183

Chamadas escritas diretamente neste corpo: `lines2.join`, `lines2.push`, `threads.forEach`.

SHA-256 do trecho: `e97535e6e393fecb0849131539155704d1d1be4a2e9a29ea78b248977c7369e2`.

### evaluation:558551

Chamadas escritas diretamente neste corpo: `lines2.join`, `lines2.push`, `threads.forEach`.

SHA-256 do trecho: `e97535e6e393fecb0849131539155704d1d1be4a2e9a29ea78b248977c7369e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
