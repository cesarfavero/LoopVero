# `parseCookieOrigin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/chrome-import/cookie-origin-grant.ts` · [README do módulo](../../../../../modules/shared/chrome-import/cookie-origin-grant-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485861-485865](../../../../../../reference/runtime/host-main.cjs#L485861-L485865) | `FunctionDeclaration` | não | `raw` |
| [evaluation:574561-574565](../../../../../../reference/runtime/sand-eval-runner.cjs#L574561-L574565) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485861-485865](../../../../../../reference/runtime/host-main.cjs#L485861-L485865) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:574561-574565](../../../../../../reference/runtime/sand-eval-runner.cjs#L574561-L574565) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:485861

Chamadas escritas diretamente neste corpo: `brandParsedString`, `chromeCookieAllowHost`, `isNormalizedCookieHost`, `raw.trim`.

SHA-256 do trecho: `38a180cf2b1de4e343a2a355e9a5e8dd059c09df8b398fd1adac8c909b642bbd`.

### evaluation:574561

Chamadas escritas diretamente neste corpo: `brandParsedString`, `chromeCookieAllowHost`, `isNormalizedCookieHost`, `raw.trim`.

SHA-256 do trecho: `38a180cf2b1de4e343a2a355e9a5e8dd059c09df8b398fd1adac8c909b642bbd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
