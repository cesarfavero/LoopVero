# `normalizeNotionId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773972-773977](../../../../../../reference/runtime/host-main.cjs#L773972-L773977) | `FunctionDeclaration` | não | `raw` |
| [evaluation:573187-573192](../../../../../../reference/runtime/sand-eval-runner.cjs#L573187-L573192) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773972-773977](../../../../../../reference/runtime/host-main.cjs#L773972-L773977) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573187-573192](../../../../../../reference/runtime/sand-eval-runner.cjs#L573187-L573192) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:773972

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `NOTION_ID_RE.test`, `NOTION_UUID_RE.test`, `raw.trim`, `trimmed.replaceAll`, `trimmed.toLowerCase`.

SHA-256 do trecho: `838d0da880e8f215f684c91326fe776af2c6b753b4cb21d55a4d184d3a61e2e4`.

### evaluation:573187

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `NOTION_ID_RE.test`, `NOTION_UUID_RE.test`, `raw.trim`, `trimmed.replaceAll`, `trimmed.toLowerCase`.

SHA-256 do trecho: `838d0da880e8f215f684c91326fe776af2c6b753b4cb21d55a4d184d3a61e2e4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
