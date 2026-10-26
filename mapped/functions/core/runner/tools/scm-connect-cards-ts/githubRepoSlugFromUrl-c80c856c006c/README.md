# `githubRepoSlugFromUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509192-509197](../../../../../../../reference/runtime/host-main.cjs#L509192-L509197) | `FunctionDeclaration` | não | `repoUrl` |
| [evaluation:556917-556922](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556917-L556922) | `FunctionDeclaration` | não | `repoUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509192-509197](../../../../../../../reference/runtime/host-main.cjs#L509192-L509197) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:556917-556922](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556917-L556922) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:509192

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `.toLowerCase`, `isDotcomGithubHost`, `repoUrlAsHttp`, `url2.pathname.replace`.

SHA-256 do trecho: `ff3fa886252eaf9ca73d280c885741ac3174b3965fb8a8d867df38cd2c6bbf79`.

### evaluation:556917

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `.toLowerCase`, `isDotcomGithubHost`, `repoUrlAsHttp`, `url2.pathname.replace`.

SHA-256 do trecho: `ff3fa886252eaf9ca73d280c885741ac3174b3965fb8a8d867df38cd2c6bbf79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
