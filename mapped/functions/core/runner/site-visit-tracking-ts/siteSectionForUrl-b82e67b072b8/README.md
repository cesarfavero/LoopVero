# `siteSectionForUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/site-visit-tracking.ts` · [README do módulo](../../../../../modules/core/runner/site-visit-tracking-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:454799-454809](../../../../../../reference/runtime/host-main.cjs#L454799-L454809) | `FunctionDeclaration` | não | `url2` |
| [evaluation:484025-484035](../../../../../../reference/runtime/sand-eval-runner.cjs#L484025-L484035) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454799-454809](../../../../../../reference/runtime/host-main.cjs#L454799-L454809) | 3 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:484025-484035](../../../../../../reference/runtime/sand-eval-runner.cjs#L484025-L484035) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:454799

Chamadas escritas diretamente neste corpo: `.replace`, `SITE_SECTIONS_BY_BUCKET.get`, `boundedSiteBucket`, `url2.hostname.toLowerCase`, `url2.pathname.startsWith`.

SHA-256 do trecho: `97109094074960d9485c0f1a44755ca6b7b9b418d37f8f604c43e33b675bc168`.

### evaluation:484025

Chamadas escritas diretamente neste corpo: `.replace`, `SITE_SECTIONS_BY_BUCKET.get`, `boundedSiteBucket`, `url2.hostname.toLowerCase`, `url2.pathname.startsWith`.

SHA-256 do trecho: `97109094074960d9485c0f1a44755ca6b7b9b418d37f8f604c43e33b675bc168`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
