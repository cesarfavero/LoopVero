# `closesUnopenedParenthesis`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732606-732608](../../../../../../../reference/runtime/host-main.cjs#L732606-L732608) | `FunctionDeclaration` | não | `url2` |
| [evaluation:539618-539620](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539618-L539620) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732606-732608](../../../../../../../reference/runtime/host-main.cjs#L732606-L732608) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539618-539620](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539618-L539620) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732606

Chamadas escritas diretamente neste corpo: `url2.endsWith`, `url2.split`.

SHA-256 do trecho: `d97129337cf3a883ac27e0e9684aba9f860c157914c195925ccefb78cf841104`.

### evaluation:539618

Chamadas escritas diretamente neste corpo: `url2.endsWith`, `url2.split`.

SHA-256 do trecho: `d97129337cf3a883ac27e0e9684aba9f860c157914c195925ccefb78cf841104`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
