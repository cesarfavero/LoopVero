# `parseNotionUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773982-773990](../../../../../../reference/runtime/host-main.cjs#L773982-L773990) | `FunctionDeclaration` | não | `url2` |
| [evaluation:573197-573205](../../../../../../reference/runtime/sand-eval-runner.cjs#L573197-L573205) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773982-773990](../../../../../../reference/runtime/host-main.cjs#L773982-L773990) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:573197-573205](../../../../../../reference/runtime/sand-eval-runner.cjs#L573197-L573205) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:773982

Chamadas escritas diretamente neste corpo: `.at`, `NOTION_SLUG_ID_RE.exec`, `isHostOf`, `notionDoc`, `segmentsOf`, `url2.searchParams.get`.

SHA-256 do trecho: `d25ec0cf19115713fec038da2ade0db2e519fc7a990fc29d5826b999a4ef2c2e`.

### evaluation:573197

Chamadas escritas diretamente neste corpo: `.at`, `NOTION_SLUG_ID_RE.exec`, `isHostOf`, `notionDoc`, `segmentsOf`, `url2.searchParams.get`.

SHA-256 do trecho: `d25ec0cf19115713fec038da2ade0db2e519fc7a990fc29d5826b999a4ef2c2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
