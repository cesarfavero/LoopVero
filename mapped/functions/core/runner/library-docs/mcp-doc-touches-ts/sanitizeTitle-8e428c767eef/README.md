# `sanitizeTitle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/library-docs/mcp-doc-touches.ts` · [README do módulo](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774528-774533](../../../../../../../reference/runtime/host-main.cjs#L774528-L774533) | `FunctionDeclaration` | não | `raw` |
| [evaluation:573907-573912](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573907-L573912) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774528-774533](../../../../../../../reference/runtime/host-main.cjs#L774528-L774533) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573907-573912](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573907-L573912) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:774528

Chamadas escritas diretamente neste corpo: `.replaceAll`, `.trim`, `raw.replaceAll`, `title.slice`.

SHA-256 do trecho: `8a1782c06ab7a504411c6460636fd0e869c751bdd2788e6f29ab86148b7cf62e`.

### evaluation:573907

Chamadas escritas diretamente neste corpo: `.replaceAll`, `.trim`, `raw.replaceAll`, `title.slice`.

SHA-256 do trecho: `8a1782c06ab7a504411c6460636fd0e869c751bdd2788e6f29ab86148b7cf62e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
