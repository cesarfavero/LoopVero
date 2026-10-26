# `rankByTerms`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/plugin-search/plugin-search.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779513-779518](../../../../../../../../reference/runtime/host-main.cjs#L779513-L779518) | `FunctionDeclaration` | não | `plugins, terms, score` |
| [evaluation:579751-579756](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579751-L579756) | `FunctionDeclaration` | não | `plugins, terms, score` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779513-779518](../../../../../../../../reference/runtime/host-main.cjs#L779513-L779518) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579751-579756](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579751-L579756) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779513

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.sort`, `plugins.map`.

SHA-256 do trecho: `cb153c3a9ca7e9fb58ec3df7271cd7e487eacc772f31e6f7a2ea4490f2db52f0`.

### evaluation:579751

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.sort`, `plugins.map`.

SHA-256 do trecho: `df449216effe8d9a895f92df2616427361646ad7da859dd3f7455e96a8bfbfa7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
