# `parseEmailTimestamp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/search-email-threads-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/search-email-threads-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765149-765159](../../../../../../../reference/runtime/host-main.cjs#L765149-L765159) | `FunctionDeclaration` | não | `{   value,   field }` |
| [evaluation:558517-558527](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558517-L558527) | `FunctionDeclaration` | não | `{   value,   field }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765149-765159](../../../../../../../reference/runtime/host-main.cjs#L765149-L765159) | 2 | 0 | 0 | 2 | 1 | 0 |
| [evaluation:558517-558527](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558517-L558527) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:765149

Chamadas escritas diretamente neste corpo: `Date.parse`, `Number.isNaN`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `ccc705c42bdfcac3558356563f63907019859c2640eb11def31fe29073a85969`.

### evaluation:558517

Chamadas escritas diretamente neste corpo: `Date.parse`, `Number.isNaN`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `ccc705c42bdfcac3558356563f63907019859c2640eb11def31fe29073a85969`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
