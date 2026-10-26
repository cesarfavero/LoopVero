# `fetchOriginPage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/origin-repo-listing.ts` · [README do módulo](../../../../../modules/core/cloud-agents/origin-repo-listing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512327-512348](../../../../../../reference/runtime/host-main.cjs#L512327-L512348) | `FunctionDeclaration` | sim | `origin, unit, request5` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512327-512348](../../../../../../reference/runtime/host-main.cjs#L512327-L512348) | 6 | 0 | 1 | 3 | 0 | 1 |

### host:512327

Chamadas escritas diretamente neste corpo: `errorLogTag`, `new ListHostedReposRequest`, `origin.listHostedRepos`, `process.stderr.write`.

SHA-256 do trecho: `488eeba833b25b9ba7148b66d4422ee4e28fd58627595f11454d31b35ef3249e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
