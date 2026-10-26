# `parseAtlassianUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774073-774090](../../../../../../reference/runtime/host-main.cjs#L774073-L774090) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573288-573305](../../../../../../reference/runtime/sand-eval-runner.cjs#L573288-L573305) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774073-774090](../../../../../../reference/runtime/host-main.cjs#L774073-L774090) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:573288-573305](../../../../../../reference/runtime/sand-eval-runner.cjs#L573288-L573305) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:774073

Chamadas escritas diretamente neste corpo: `.join`, `LINEAR_ISSUE_RE.test`, `hostname4.endsWith`, `matching`, `segments.indexOf`, `segments.slice`, `segmentsOf`, `url2.hostname.toLowerCase`.

SHA-256 do trecho: `b855fe98011e695ef7acfb1e209c8752ce506903709122e5112977b6486c2c41`.

### evaluation:573288

Chamadas escritas diretamente neste corpo: `.join`, `LINEAR_ISSUE_RE.test`, `hostname3.endsWith`, `matching`, `segments.indexOf`, `segments.slice`, `segmentsOf`, `url2.hostname.toLowerCase`.

SHA-256 do trecho: `5e4c967c138c97434bb425147373319b4bdc2a71095200fcef8f56e845e832b7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
