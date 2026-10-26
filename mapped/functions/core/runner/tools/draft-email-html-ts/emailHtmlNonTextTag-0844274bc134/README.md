# `emailHtmlNonTextTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732467-732472](../../../../../../../reference/runtime/host-main.cjs#L732467-L732472) | `FunctionDeclaration` | não | `html` |
| [evaluation:539479-539484](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539479-L539484) | `FunctionDeclaration` | não | `html` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732467-732472](../../../../../../../reference/runtime/host-main.cjs#L732467-L732472) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:539479-539484](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539479-L539484) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:732467

Chamadas escritas diretamente neste corpo: `html.matchAll`, `parseTag`, `textTagAllowed`.

SHA-256 do trecho: `d3f286f137263f8e2177f162e27f3f4fc2dbb6b287fb0e2c4a883932bc84678c`.

### evaluation:539479

Chamadas escritas diretamente neste corpo: `html.matchAll`, `parseTag`, `textTagAllowed`.

SHA-256 do trecho: `d3f286f137263f8e2177f162e27f3f4fc2dbb6b287fb0e2c4a883932bc84678c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
