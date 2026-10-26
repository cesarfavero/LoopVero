# `parseGoogleUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774006-774019](../../../../../../reference/runtime/host-main.cjs#L774006-L774019) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573221-573234](../../../../../../reference/runtime/sand-eval-runner.cjs#L573221-L573234) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774006-774019](../../../../../../reference/runtime/host-main.cjs#L774006-L774019) | 7 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:573221-573234](../../../../../../reference/runtime/sand-eval-runner.cjs#L573221-L573234) | 7 | 0 | 0 | 6 | 0 | 0 |

### host:774006

Chamadas escritas diretamente neste corpo: `googleDoc`, `segments.includes`, `segments.indexOf`, `segmentsOf`, `url2.searchParams.get`.

SHA-256 do trecho: `91a06e89bce7c88ebc4cc64a47f9ed64b6cd49924f6073bc434ddc7ca97baec8`.

### evaluation:573221

Chamadas escritas diretamente neste corpo: `googleDoc`, `segments.includes`, `segments.indexOf`, `segmentsOf`, `url2.searchParams.get`.

SHA-256 do trecho: `91a06e89bce7c88ebc4cc64a47f9ed64b6cd49924f6073bc434ddc7ca97baec8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
